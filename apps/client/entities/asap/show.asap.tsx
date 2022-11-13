
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowAsap(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="weee" />
<ReferenceField source="appid" reference="app" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}