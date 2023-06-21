import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, forwardRef } from 'react';
import { enGB } from 'date-fns/locale';
import { 
Input,
ContainerDate
} from './Calendar.styled';
import './Calendar.css';

export const TransactionDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick , onChange}, ref) => (
    <Input 
    value={value}
    onClick={onClick} 
    onChange={onChange}
    ref={ref}
    onKeyDown={e => {
        e.preventDefault();
      }}> 
    </Input>
  ));

  return (
    <ContainerDate>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        customInput={<ExampleCustomInput />}
        locale={enGB}
        maxDate={new Date()}
      />
    </ContainerDate>
  );
};
