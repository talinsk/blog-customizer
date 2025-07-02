import { CSSProperties, useState } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';

import styles from './App.module.scss';

export const App = () => {
	const [state, setState] = useState<ArticleStateType>({
		...defaultArticleState,
	});

	const handleParamsApplied = (pars: ArticleStateType) => {
		setState(pars);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': state.fontFamilyOption.value,
					'--font-size': state.fontSizeOption.value,
					'--font-color': state.fontColor.value,
					'--container-width': state.contentWidth.value,
					'--bg-color': state.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onApply={handleParamsApplied} />
			<Article />
		</main>
	);
};
