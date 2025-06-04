import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import { OnClick } from '../arrow-button/ArrowButton';

import { OptionType, fontFamilyOptions } from 'src/constants/articleProps';
import { fontSizeOptions } from 'src/constants/articleProps';
import { fontColors } from 'src/constants/articleProps';
import { backgroundColors } from 'src/constants/articleProps';
import { contentWidthArr } from 'src/constants/articleProps';
import { IAllOptions } from 'src/index';

export type ChangeSelectFn = (selection: OptionType) => void;

interface PropsArticleParamsForm {
	toggleOpenFn: OnClick;
	openState: boolean;
	submitForm: (evt: React.SyntheticEvent) => void;
	setDefaultOptions: OnClick;
	formState: IAllOptions;
	setFormState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export const ArticleParamsForm = ({
	toggleOpenFn,
	openState,
	submitForm,
	setDefaultOptions,
	formState,
	setFormState,
}: PropsArticleParamsForm) => {
	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpenFn} openState={openState} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.container_open]: openState,
				})}>
				<form className={styles.form} onSubmit={submitForm}>
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontFamilyOption: selected,
							}))
						}
					/>
					<RadioGroup
						title='размер шрифта'
						name='font-size'
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								fontSizeOption: selected,
							}))
						}
					/>
					<Select
						title='цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(selected) =>
							setFormState((oldState) => ({ ...oldState, fontColor: selected }))
						}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								backgroundColor: selected,
							}))
						}
					/>
					<Select
						title='ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(selected) =>
							setFormState((oldState) => ({
								...oldState,
								contentWidth: selected,
							}))
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={setDefaultOptions} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};