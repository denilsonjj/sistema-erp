import React from 'react';
import MachineList from './MachineList';
const EmCampoView = ({ machines, maintenanceTasks, onAddHorimetro, onSelectMachine, onAddMachineToDashboard, onRemoveMachineFromDashboard, onUpdateMachineStatus, availableMachinesToAdd, dashboardMachineIds, }) => {
    return (<div className="bg-brand-secondary p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-brand-light mb-4">Visão Geral dos Equipamentos</h3>
      <MachineList machines={machines} maintenanceTasks={maintenanceTasks} viewMode="em_campo" availableMachinesToAdd={availableMachinesToAdd} onAddHorimetro={onAddHorimetro} onSelectMachine={onSelectMachine} onAddMachineToDashboard={onAddMachineToDashboard} onRemoveMachineFromDashboard={onRemoveMachineFromDashboard} onUpdateMachineStatus={onUpdateMachineStatus} dashboardMachineIds={dashboardMachineIds}/>
    </div>);
};
export default EmCampoView;
