import styles from "./SearchForm.module.css";
import { IconButton } from "../index";

const SearchForm = ({ placeholder = "Search", onSubmit, className = "", inputClassName = "", buttonClassName = "", searchIcon, ...props }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSubmit) {
			onSubmit(e);
		}
	};

	return (
		<form className={`${styles.searchForm} ${className}`} onSubmit={handleSubmit} {...props}>
			<input className={`${styles.searchInput} ${inputClassName}`} type="search" placeholder={placeholder} />
			<IconButton icon={searchIcon} alt="search icon" ariaLabel="Search" type="submit" className={buttonClassName} iconClassName={styles.searchIcon} />
		</form>
	);
};

export default SearchForm;
