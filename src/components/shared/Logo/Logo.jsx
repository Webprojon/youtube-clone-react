import styles from "./Logo.module.css";
import { logo } from "../../../assets";

const Logo = ({ className = "", href = "/home.html", alt = "YouTube Logo" }) => {
	return (
		<a href={href} aria-label="YouTube Home" className={className}>
			<img className={styles.logo} src={logo} alt={alt} />
		</a>
	);
};

export default Logo;
