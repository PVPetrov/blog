## DatePicker

The component creates date selectors according to the needs of usage

##### Props

Required:

- onChange - function to handle the changes, DatePicker would return object with the values of its state as follows
- value - object with date, month and year values
  Exmpl.:
```
{
    date: '02',
    month: '11',
    year: '2018'
}
```
- date - pass it as empty prop and the component will add the field to the DatePicker component
- month - same as date
- year - same as date

NB! If none of the mentioned above is added the DatePicker will return the default year field!

- title - If you want the Datepicker component to be prepended with label, pass title prop to the label
- labels -. If you want the datepicker to show names different fromt he default(eg. 'translation'), add the name to labels object as follows in the example.
- styles - pass extra styles to customize the datepicker outlook by passing jsx styles objects to either formGroup or/and itemGroup

Exmpl.:
```
<DatePicker
    month date year
    title: 'Sünnipäev'  // can aslo be a node - <h3>Sünnipäev</h3>
    labels={
        date: 'kuupäev',  // can aslo be a node - <span style={{color: 'red'}}>kuupäev</span>
        month: 'kuu',
        year: 'aasta'
    }
    styles={
        formGroup: {
            width: '100%'
        },
        itemGroup: {
            width: '70%'
        }
    }
/>

```