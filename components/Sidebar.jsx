import React from 'react';
import {
    DashboardIcon,
    MachineIcon,
    WrenchIcon,
    CogIcon,
    DatabaseIcon,
    LogoutIcon,
    BridgeIcon,
    FactoryIcon,
    FuelIcon,
    ChartIcon
} from './icons';

const Logo = ({ size = 'md' }) => {
    const isLarge = size === 'lg';
    const isSmall = size === 'sm';
    return (
        <div className={`bg-brand-logo rounded-xl flex flex-col items-center justify-center shadow-lg border border-white/10 ${isLarge ? 'p-8 w-64' : isSmall ? 'p-1 w-24' : 'p-4 w-48'}`}>
            <span className={`text-white font-bold tracking-[0.2em] uppercase leading-none ${isLarge ? 'text-sm mb-1' : isSmall ? 'text-[6px]' : 'text-[10px] mb-0.5'}`}>
                Construtora
            </span>
            <span className={`text-white font-black italic tracking-tighter leading-none ${isLarge ? 'text-5xl' : isSmall ? 'text-lg' : 'text-3xl'}`}>
                PERFIL
            </span>
        </div>
    );
};

const NavItem = ({ icon, label, isActive, onClick }) => {
    return (
        <li
            onClick={onClick}
            className={`flex items-center p-3 my-1 rounded-lg cursor-pointer transition-colors duration-200 ${isActive
                ? 'bg-brand-accent text-brand-primary font-bold shadow-md'
                : 'text-brand-muted hover:bg-brand-secondary hover:text-brand-light'}`}
        >
            <div className={isActive ? 'text-brand-primary' : ''}>{icon}</div>
            <span className="ml-4 font-medium">{label}</span>
        </li>
    );
};

const Sidebar = ({ activeView, setActiveView, isSidebarOpen, setSidebarOpen, userPermissions, onLogout }) => {
    const allNavItems = [
        { view: 'Dashboard', label: 'Dashboard', icon: <DashboardIcon />, permissionKey: 'editDashboard' },
        { view: 'Em Campo', label: 'Em Campo', icon: <MachineIcon />, permissionKey: 'editCampo' },
        { view: 'Abastecimentos', label: 'Abastecimentos', icon: <FuelIcon />, permissionKey: 'editAbastecimentos' },
        { view: 'Oficina', label: 'Oficina', icon: <WrenchIcon />, permissionKey: 'editOficina' },
        { view: 'Pontes', label: 'Pontes', icon: <BridgeIcon />, permissionKey: 'viewPontes' },
        { view: 'Usina', label: 'Usina de Asfalto', icon: <FactoryIcon />, permissionKey: 'viewUsina' },
        { view: 'Banco de Dados', label: 'Banco de Dados', icon: <DatabaseIcon />, permissionKey: 'editBancoDados' },
        { view: 'Relatorios', label: 'Relatorios', icon: <ChartIcon />, permissionKey: 'viewRelatorios' },
        { view: 'Configuracoes', label: 'Configuracoes', icon: <CogIcon />, permissionKey: 'editConfiguracoes' }
    ];

    const visibleNavItems = allNavItems.filter((item) => userPermissions[item.permissionKey]);

    return (
        <>
            <aside className={`absolute lg:relative z-20 w-64 min-h-screen bg-brand-secondary p-4 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 flex flex-col border-r border-slate-700`}>
                <div className="flex items-center mb-10 justify-center pt-4">
                    <Logo size="md" />
                </div>
                <nav className="flex-1 overflow-y-auto">
                    <ul>
                        {visibleNavItems.map((item) => (
                            <NavItem
                                key={item.view}
                                icon={item.icon}
                                label={item.label}
                                isActive={activeView === item.view}
                                onClick={() => {
                                    setActiveView(item.view);
                                    setSidebarOpen(false);
                                }}
                            />
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto pt-4 border-t border-slate-600">
                    <button onClick={onLogout} className="flex items-center w-full p-3 rounded-lg text-red-400 hover:bg-red-900/20 hover:text-red-300 transition-colors">
                        <LogoutIcon className="w-6 h-6" />
                        <span className="ml-4 font-medium">Sair</span>
                    </button>
                </div>
            </aside>
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
        </>
    );
};

export default Sidebar;
