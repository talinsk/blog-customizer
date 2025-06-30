import { useState } from 'react';
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
	OptionType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormState = {
	isOpen: boolean;
	selectedFontOption: OptionType;
	selectedFontSizeOption: OptionType;
	selectedFontColorsOption: OptionType;
	selectedBackgroundColorsOption: OptionType;
	selectedContentWidthArrOption: OptionType;
};

export const ArticleParamsForm = () => {
	const [state, setState] = useState<ArticleParamsFormState>({
		isOpen: true,
		selectedFontOption: fontFamilyOptions[0],
		selectedFontSizeOption: fontSizeOptions[0],
		selectedFontColorsOption: fontColors[0],
		selectedBackgroundColorsOption: backgroundColors[0],
		selectedContentWidthArrOption: contentWidthArr[0],
	});

	const {
		isOpen,
		selectedFontOption,
		selectedFontSizeOption,
		selectedFontColorsOption,
		selectedBackgroundColorsOption,
		selectedContentWidthArrOption,
	} = state;

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
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={selectedFontOption}
						title='Шрифт'
						onChange={(opt) => {
							setState({ ...state, selectedFontOption: opt });
						}}
					/>
					<RadioGroup
						name='font-size'
						title='Размер шрифта'
						options={fontSizeOptions}
						selected={selectedFontSizeOption}
						onChange={(opt) => {
							setState({ ...state, selectedFontSizeOption: opt });
						}}
					/>
					<Select
						options={fontColors}
						selected={selectedFontColorsOption}
						title='Цвет шрифта'
						onChange={(opt) => {
							setState({ ...state, selectedFontColorsOption: opt });
						}}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectedBackgroundColorsOption}
						title='Цвет фона'
						onChange={(opt) => {
							setState({ ...state, selectedBackgroundColorsOption: opt });
						}}
					/>
					<Select
						options={contentWidthArr}
						selected={selectedContentWidthArrOption}
						title='Ширина контента'
						onChange={(opt) => {
							setState({ ...state, selectedContentWidthArrOption: opt });
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
