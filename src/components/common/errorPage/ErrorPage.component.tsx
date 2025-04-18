import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { translate } from "../../../lang/utils/TranslationUtils";

interface ErrorPageProps {
    errorNumber: number;
    errorNameCode: string;
    messageCode: string;
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
    const navigate = useNavigate(); 

    return (
        <section className = "error-page">
            <div className = "error-page-content">
                <h1>{props.errorNumber}</h1>
                <h2>{translate(props.errorNameCode)}</h2>
                <p>{translate(props.messageCode)}</p>
                <button 
                    className = "error-page-button" 
                    onClick={() => navigate("/")}>
                    {translate("ERROR.BACK_BUTTON")}
                </button>
            </div>
        </section>      
    );
};