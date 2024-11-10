import React from 'react'
import {clsx} from 'clsx'

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
	className?: string
	size?: TitleSize
	text: string
}

export const Title: React.FC<Props> = ({className, size = 'sm', text}) => {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		'2xl': 'h1',
	} as const
	
	const mapClassNameBySize = {
		xs: 'text-[16px]',
		sm: 'text-[22px]',
		md: 'text-[26px]',
		lg: 'text-[32px]',
		xl: 'text-[40px]',
		'2xl': 'text-[48px]',
	} as const
	
	return React.createElement(
		mapTagBySize[size],
		{ className: clsx(mapClassNameBySize[size], className)},
		text
	)
}