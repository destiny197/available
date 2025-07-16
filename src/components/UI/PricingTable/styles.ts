import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;

  &.popular {
    border: 2px solid #ff6b6b;
  }

  .popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6b6b;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  .commission {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  button {
    background: #333;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #555;
    }
  }
`;
