import '../design/IPaddress-design/IPaddress.scss';
import FormInput from "./FormInput";

type AddressProps = {
    title: string;
    onSearch: (ip: string) => void; 
}

export default function IPaddrress({ title, onSearch }: AddressProps) {
    return (
        <div className="container">
            <div className="address-wrapper">
                <h1>{title}</h1>
                <FormInput name="ip-address" id="ip-address" onSearch={onSearch} />
            </div>
        </div>
    );
}
