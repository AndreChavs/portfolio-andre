import Link from 'next/link'
import { Logo } from './Navigation'
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { XIcon } from '@heroicons/react/solid'

export const SideMenu = ({ mobile, setMobile }) => {
	function handleClick() {
		setMobile(!mobile)
	}

	return (
		<div
			className={
				mobile
					? 'fixed left-0 top-0 w-full h-screen bg-black/50 ease-in duration-500'
					: 'hidden'
			}
		>
			<div
				className={
					mobile
						? 'fixed left-0 top-0 w-[75%] sm:w-[80%] md:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
						: 'fixed left-[-100%] p-10 ease-in duration-500'
				}
			>
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
						<XIcon className="h-7 w-7 text-blue-500" />
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
				{/* Social Links */}
				<div className="pt-40">
					<p className="uppercase tracking-widest text-[#5651e5]">
						Lets Connect
					</p>
					<div className="flex justify-around items-center my-4 w-full">
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-150">
							<FaLinkedinIn size={22} />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-150">
							<FaGithub size={22} />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-150">
							<FaWhatsapp size={22} />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-150">
							<FaInstagram size={22} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
