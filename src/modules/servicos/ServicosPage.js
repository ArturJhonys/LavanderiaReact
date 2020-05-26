import React, { useState } from 'react'
import MaterialTable from 'material-table'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done';
import Moment from 'moment'
import useServicosAPI from './hooks/useServicosAPI'

const columns = [
    { title: 'Nome', field: 'nome' },
    { title: 'Medida', field: 'unidade_medida' },
    { title: 'Preço (R$)', field: 'preco', type: 'numeric' },
    {
        title: 'Estimativa Entrega',
        field: 'entrega',
        type: 'numeric',
        render: ({ entrega }) => Moment().add(entrega, 'days').format("DD/MM/YYYY")
    },

]

function ServicosPages() {
    const [filtroUnidade, SetFiltroUnidade] = useState(null)
    const [servicos, loading] = useServicosAPI(filtroUnidade)


    return (
        <div style={{ padding: 16 }}>

            <ServicosFilter value={filtroUnidade} onChange={SetFiltroUnidade} />

            <MaterialTable
                isLoading={loading}
                title="Serviços"
                columns={columns}
                data={servicos}
            />
        </div>
    )
}

function ServicosFilter({ value, onChange }) {

    const [unidades] = useState([
        "peça",
        "kg",
        "par"
    ])

    return (
        <div style={{ padding: '8px 0' }}>
            {unidades.map(unidade => (
                <Chip
                    key={unidade}
                    style={{ marginRight: 8 }}
                    onClick={() => onChange(value == unidade ? null : unidade)}
                    label={unidade}
                    color={value == unidade ? "primary" : undefined}
                    icon={value == unidade ? <DoneIcon /> : null}
                />
            ))}

        </div>

    )
}

export default ServicosPages;