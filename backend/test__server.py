import pytest
from backend.server import app


# Set up a test client
@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()
    yield client


# Mock the Stripe API key for testing
@pytest.fixture(autouse=True)
def set_stripe_key(monkeypatch):
    monkeypatch.setenv("STRIPE_API_KEY", "test_stripe_api_key")


# Mock data for testing
cart_items = {
    "1": {
        "item": {"title": "Test Item 1", "price": 1000},
        "count": 2
    },
    "2": {
        "item": {"title": "Test Item 2", "price": 1500},
        "count": 1
    }
}


def test_create_checkout_session_success(client, mocker):
    mock_session = mocker.Mock()
    mock_session.url = "https://example.com/success"

    # Patch the Stripe API call
    mocker.patch('stripe.checkout.Session.create', return_value=mock_session)

    response = client.post(
        '/create-checkout-session',
        json={'cartItems': cart_items},
    )
    assert response.status_code == 200
    data = response.get_json()
    assert 'url' in data
    assert data['url'] == "https://example.com/success"


def test_create_checkout_session_failure(client, mocker):
    # Patch the Stripe API call to raise an exception
    mocker.patch(
        'stripe.checkout.Session.create',
        side_effect=Exception("Test error"),
    )

    response = client.post(
        '/create-checkout-session',
        json={'cartItems': cart_items},
    )
    assert response.status_code == 403
    data = response.get_json()
    assert 'error' in data
    assert data['error'] == "Test error"


def test_success_route(client):
    response = client.get('/success')
    assert response.status_code == 200
    assert b'Success' in response.data


def test_canceled_route(client):
    response = client.get('/canceled')
    assert response.status_code == 200
    assert b'Canceled' in response.data
