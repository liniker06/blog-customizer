import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { OptionType, defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export interface IAllOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formState, setFormState] = useState<IAllOptions>(defaultArticleState);
	const [pageState, setPageState] = useState<IAllOptions>(defaultArticleState);

	function toggleOpen() {
		setIsOpen((oldVal) => !oldVal);
	}

	function handleClose() {
		setIsOpen(false);
	}

	function setDefaultOptions() {
		setFormState(defaultArticleState);
		setPageState(defaultArticleState);
	}

	function submitForm(evt: React.SyntheticEvent) {
		evt.preventDefault();
		setPageState(formState);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				toggleOpenFn={toggleOpen}
				openState={isOpen}
				submitForm={submitForm}
				setDefaultOptions={setDefaultOptions}
				formState={formState}
				setFormState={setFormState}
			/>
			<Article closeFn={handleClose} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);