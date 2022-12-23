import React from 'react';

interface Props {
  // You can define the props that the component expects to receive here
}

const Dealmaker: React.FC<Props> = (props) => {
  return (
        <div className="Dealmaker">
        <section>
            <h1>Dealmaker</h1>
            <p>
                Dealmaker is a company with the mission of finding new customers and
                making higher profits for your business.
            </p>
        </section>
        <section>
            <h2>Amazing clients</h2>
            <p>
                Amazing clients have allowed us to produce results for them in Business
                to Business and Business to Person deal making, diplomacy and business
                development and we are sure that we can contribute to your growth and
                profit and we would like to show you how we can assist your business in
                meeting its goals.
            </p>
        </section>
        <img src={'./handshake.png'} />
        <section>
            <h2>Areas we can help your business in:</h2>
            <ul>
                <li>making and negotiating deals</li>
                <li>diplomacy</li>
                <li>business development</li>
                <li>communications</li>
                <li>consulting in the above mentioned areas</li>
            </ul>
        </section>
        <p>
            <strong><a href='tel:+36303756537'>Let us help you in growing your business today</a></strong>
        </p>
        </div>
    );
};

export default Dealmaker;