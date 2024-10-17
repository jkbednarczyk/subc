import './PurchasePage.css';
import { translate } from '../../lang/utils/TranslationUtils';

export const PurchasePage = () => {
    return <>
        <section className="purchase">
            <h1 className="purchase_title">{translate("PURCHASE.TITLE")}</h1>
            <div className="purchase_page_content">
                <p>{translate("PURCHASE.FIRST")}</p>
                <p>{translate("PURCHASE.SECOND")}</p>
                <p>{translate("PURCHASE.THIRD")}</p>
                <p>{translate("PURCHASE.FOURTH")}</p>
                <p>{translate("PURCHASE.FIFTH")}</p>      
            </div>
        </section>
    </>
}