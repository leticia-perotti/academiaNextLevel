import { Input } from '@heroui/react';

export default function LoginPage() {
	return (
		<div className="flex h-screen bg-[#1A1A1A]">
			<div className="flex w-1/2 items-center justify-center bg-gray-100">
				<div className="text-center">
					<h2 className="mb-4 text-2xl font-bold">Formulário de Login</h2>
				</div>
			</div>
			<div className="flex w-1/2 items-center justify-center bg-blue-200">
				<div className="text-center">
					<h2 className="mb-4 text-2xl font-bold">Imagem de Login</h2>
					<Input />
				</div>
			</div>
		</div>
	);
}
