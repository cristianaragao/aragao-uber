import tw from 'tailwind-react-native-classnames'

export default function (...classnames: string[]) {
 return tw`${classnames.join(' ')}`
}