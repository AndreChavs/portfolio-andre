import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SideMenu } from './Sidemenu'
import { MenuIcon } from '@heroicons/react/solid'

const _apiItens = [
	{ nome: 'home', href: '/' },
	{ nome: 'sobre', href: '/sobre' },
	{ nome: 'habilidades', href: '/habilidades' },
	{ nome: 'projetos', href: '/projetos' },
	{ nome: 'contato', href: '/contato' }
]

export const Logo = ({ src, width, height, alt, href }) => {
	return (
		<div>
			<Link href={href}>
				<a>
					<Image src={src} alt={alt} width={width} height={height} />
				</a>
			</Link>
		</div>
	)
}

/*Fazer um useHook para troca de array e outro para troca de Classes:
	No videoAula, 
*/
export const Menulist = ({ apiList, className, mobile }) => {
	const [styled, setStyled] = React.useState(['hidden', 'md:flex'])
	React.useEffect(() => {
		if (mobile && className !== undefined) {
			if (className.length > 0) {
				setStyled(className.split(' '))
			} else {
				setStyled(['hidden', 'md:flex'])
			}
		} else {
			setStyled(['hidden', 'md:flex'])
		}
	}, [mobile, className])

	return (
		<ul className={styled.join(' ')}>
			{apiList.map((item, index) => {
				return (
					<Link href={item.href} key={index}>
						<li className="ml-10 text-sm uppercase hover:text-[#709dff]">
							<a>{item.nome}</a>
						</li>
					</Link>
				)
			})}
		</ul>
	)
}

export const MobileMenu = ({ mobile, setMobile }) => {
	function handleClick() {
		setMobile(!mobile)
	}
	return (
		<div className="md:hidden cursor-pointer" onClick={handleClick}>
			{mobile || <MenuIcon className="h-8 w-8 text-[#709dff]" />}
		</div>
	)
}

export const Navbar = () => {
	const [mobile, setMobile] = React.useState(false)

	return (
		<nav className="flex justify-between items-center w-full h-20 px-5 2xl:px-16">
			<Logo
				href={'/'}
				src="/logo192.png"
				width={64}
				height={64}
				alt="Simbolo do React"
			/>
			<Menulist apiList={_apiItens} mobile={mobile} />
			<MobileMenu mobile={mobile} setMobile={setMobile} />
			<SideMenu mobile={mobile} setMobile={setMobile} />
		</nav>
	)
}
