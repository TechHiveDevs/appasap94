
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
} from "react-admin";

// ------------------------------------------------

export default function ShowApp(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}