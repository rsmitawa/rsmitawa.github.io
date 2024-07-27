import { socialAccounts } from "./Constant";

const Social = () => {
  return (
    <ul className="list-inline social-buttons">
      {socialAccounts.map(account => <li key={account.name} className="list-inline-item">
        <a href={account.profile}>
          <i className={account.icon}></i>
        </a>
      </li>
      )}
    </ul>
  );
};


export default Social;