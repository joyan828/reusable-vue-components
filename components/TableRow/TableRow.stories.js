import { storiesOf } from '@storybook/vue'
import TableRow from './TableRow'

storiesOf('TableRow', module)
  .add('normal', () => ({
    components: { TableRow },
    template:
    `
      <TableRow
        :values="values"
      />
    `,
    data: () => ({
      values: [
        'Never ending setting',
        'email@email.com'
      ]
    })
  }))