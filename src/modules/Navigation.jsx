import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { XIcon, MenuIcon } from '@heroicons/react/solid'

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
			{mobile ? (
				<XIcon className="h-8 w-8 text-[#709dff]" />
			) : (
				<MenuIcon className="h-8 w-8 text-[#709dff]" />
			)}
		</div>
	)
}

export const SideMenu = ({ mobile, setMobile }) => {
	function handleClick() {
		setMobile(!mobile)
	}
	return (
		<div className="fixed left-0 top-0 w-full h-screen bg-black/50">
			<div className="fixed left-0 top-0 sm:w-[80%] md:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
				<div className="flex w-full items-center justify-between">
					<Logo
						href={'/'}
						src="/logo192.png"
						width={94}
						height={94}
						alt="Simbolo do React"
					/>
					<div
						className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
						onClick={handleClick}
					>
						<XIcon className="h-8 w-8 text-blue-500" />
					</div>
				</div>
				<div className="border-b border-gray-300 my-4">
					<p className="w-[85%] md:w-[90%] py-4">
						Lets build something legendary together
					</p>
				</div>
				{/* Aqui deve ser chamado o componente <Menulist /> */}
				<ul className="py-4 flex flex-col">
					{_apiItens.map((item, index) => {
						return (
							<Link href={item.href} key={index}>
								<li className="py-4 text-sm uppercase">
									<a>{item.nome}</a>
								</li>
							</Link>
						)
					})}
				</ul>
				<div className="pt-40">
					<p className="uppercase tracking-widest text-[#5651e5]">
						Lets Connect
					</p>
					<div></div>
				</div>
			</div>
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
			{mobile && <SideMenu mobile={mobile} setMobile={setMobile} />}
		</nav>
	)
}
