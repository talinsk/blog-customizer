import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormState = {
	isOpen: boolean;
	selectedFontOption: OptionType;
};

export const ArticleParamsForm = () => {
	const [state, setState] = useState<ArticleParamsFormState>({
		isOpen: true,
		selectedFontOption: fontFamilyOptions[0],
	});

	const { isOpen, selectedFontOption } = state;

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setState({ ...state, isOpen: !isOpen });
				}}
			/>
			<aside className={isOpen ? styles.container_open : styles.container}>
				<form className={styles.form}>
					<h1>Задайте параметры</h1>
					<Select
						options={fontFamilyOptions}
						selected={selectedFontOption}
						title='Шрифт'
						onChange={(opt) => {
							setState({ ...state, selectedFontOption: opt });
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
