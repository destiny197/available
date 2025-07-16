'use client';
import { Wrapper, Inner, Header, PricingCards, Card } from './styles';
import { MaskText } from '@/components';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0/month',
    features: ['Start selling with essential tools'],
    commission: '5% commission',
    cta: 'Choose Plan',
  },
  {
    name: 'Pro',
    price: '$15/month',
    features: ['Advanced tools, analytics, email support'],
    commission: '3% commission',
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$50/month',
    features: ['Full theme access, priority support'],
    commission: '1% commission',
    cta: 'Choose Plan',
  },
];

const PricingTable = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={['Simple, Transparent', 'Pricing']} tag="h1" />
        </Header>
        <PricingCards>
          {pricingPlans.map((plan, i) => (
            <Card key={i} className={plan.popular ? 'popular' : ''}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h2>{plan.name}</h2>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="commission">{plan.commission}</p>
              <button>{plan.cta}</button>
            </Card>
          ))}
        </PricingCards>
      </Inner>
    </Wrapper>
  );
};

export default PricingTable;
