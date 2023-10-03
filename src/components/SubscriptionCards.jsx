/* eslint-disable react/prop-types */
import '../styles/SubscriptionCards.css';
function SubscriptionCard({ title, price, description, services, highlighted }) {
    return (
        <div className={`subscription-card ${highlighted ? 'subscription-card-highlighted' : ''}`}>
            <h2 className="subscription-card-title">{title}</h2>
            <p className="subscription-card-price">${price}</p>
            <p className="subscription-card-description">{description}</p>
            <ul className="subscription-card-services">
                {services.map((service, index) => (
                    <li key={index} className={`subscription-card-service ${service.enabled ? 'service-enabled' : 'service-disabled'}`}>
                        {service.enabled ? (
                            <span className="service-tick">✓</span>
                        ) : (
                            <span className="service-cross">✗</span>
                        )}
                        {service.name}
                    </li>
                ))}
            </ul>
            <button className="subscription-card-button">Subscribe</button>
        </div>
    );
}
function SubscriptionCards() {
    const services = [
        { name: "Service 1", enabled: true },
        { name: "Service 2", enabled: true },
        { name: "Service 3", enabled: true },
        { name: "Service 4", enabled: false },
        { name: "Service 5", enabled: false },
        { name: "Service 6", enabled: false }
    ];

    return (
        <div className="cards-container_ss">
            <SubscriptionCard
                title="Economical"
                price="14"
                description="An affordable plan for small teams."
                services={services}
            />
            <SubscriptionCard
                title="Professional"
                price="25"
                description="Perfect for growing businesses."
                services={[...services.slice(0, 5), { ...services[5], enabled: true }]}
                highlighted
            />
            <SubscriptionCard
                title="Premium"
                price="35"
                description="All-in-one solution for large enterprises."
                services={services.map(service => ({ ...service, enabled: true }))}
            />
        </div>
    );
}

export default SubscriptionCards;