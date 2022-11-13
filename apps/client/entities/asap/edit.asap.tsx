
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditAsap(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="weee" variant="outlined"   />
<ReferenceInput label="app" source="appid" reference="app">
        <AutocompleteInput variant="outlined" /* optionText="app"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}