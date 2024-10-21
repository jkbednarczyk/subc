import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CustomContactItem.css';

export const CustomContactItem = ({ icon, children }: { icon: any, children: React.ReactNode }) => (
    <li className="contact-item">
        <div className="icon">
            <FontAwesomeIcon icon={icon} />
        </div>
        <div className="data">{children}</div>
    </li>
);