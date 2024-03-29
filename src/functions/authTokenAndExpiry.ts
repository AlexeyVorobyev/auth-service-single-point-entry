import { TTokenDataAttributes } from '../types/graphql/graphql.ts'


interface IGetTokensAndExpiryReturnValue {
	refreshToken: string | null,
	refreshExpiry: string | null,
	accessToken: string | null,
	accessExpiry: string | null
}

export const getTokensAndExpiry = (): IGetTokensAndExpiryReturnValue => {
	return {
		refreshToken: localStorage.getItem('refreshToken'),
		refreshExpiry: localStorage.getItem('refreshExpiry'),
		accessToken: localStorage.getItem('accessToken'),
		accessExpiry: localStorage.getItem('accessExpiry'),
	}
}

export const setTokenAndExpiry = (tokens: TTokenDataAttributes) => {
	localStorage.setItem('accessToken', tokens.accessToken)
	localStorage.setItem('refreshToken', tokens.refreshToken)
	localStorage.setItem('accessExpiry', tokens.accessTokenTTL.toString())
	localStorage.setItem('refreshExpiry', tokens.refreshTokenTTL.toString())
}