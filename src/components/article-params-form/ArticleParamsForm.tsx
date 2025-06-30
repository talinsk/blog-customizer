import { FormEvent, useState } from 'react';
import { Text } from 'src/ui/text';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
	onApply: (pars: ArticleStateType) => void;
};

type ArticleParamsFormState = ArticleStateType & {
	isOpen: boolean;
};

export const ArticleParamsForm = ({ onApply }: ArticleParamsFormProps) => {
	const [state, setState] = useState<ArticleParamsFormState>({
		isOpen: false,
		...defaultArticleState,
	});

	const {
		isOpen,
		fontSizeOption,
		backgroundColor,
		contentWidth,
		fontColor,
		fontFamilyOption,
	} = state;

	const handleApply = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const pars: ArticleStateType = { ...state };
		onApply(pars);
		handleReset();
	};

	const handleReset = () => {
		setState({ ...defaultArticleState, isOpen: false });
	};

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setState({ ...state, isOpen: !isOpen });
				}}
			/>
			<aside
				className={`${styles.container} ${
					isOpen ? styles.container_open : ''
				}`}>
				<form
					className={styles.form}
					onSubmit={handleApply}
					onReset={handleReset}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={fontFamilyOption}
						title='Шрифт'
						onChange={(opt) => {
							setState({ ...state, fontFamilyOption: opt });
						}}
					/>
					<RadioGroup
						name='font-size'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={fontSizeOption}
						onChange={(opt) => {
							setState({ ...state, fontSizeOption: opt });
						}}
					/>
					<Select
						options={fontColors}
						selected={fontColor}
						title='Цвет шрифта'
						onChange={(opt) => {
							setState({ ...state, fontColor: opt });
						}}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						title='Цвет фона'
						onChange={(opt) => {
							setState({ ...state, backgroundColor: opt });
						}}
					/>
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						title='Ширина контента'
						onChange={(opt) => {
							setState({ ...state, contentWidth: opt });
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
