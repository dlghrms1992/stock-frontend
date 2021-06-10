import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const CommonMenu = () => {
    <ul className="commonMenu">
        <BrowserRouter>
            <li>
                <Link to="#none" className="tab_stock on">주식</Link>
            </li>
            <li>
                <Link to="#none" className="tab_cryptoCurrency">가상화폐</Link>
            </li>
            <li>
                <Link to="#none" className="tab_realEstate">부동산</Link>
            </li>
            <li>
                <Link to="#none" className="tab_investments">기타 투자</Link>
            </li>
        </BrowserRouter>
    </ul>
}

export default Common;