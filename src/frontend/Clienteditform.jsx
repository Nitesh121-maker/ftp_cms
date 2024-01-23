import React,{useEffect,useState} from 'react'
import "../css/index.css"
function Clienteditform({ selectedClient }) {
     const [formData, setFormData] = useState({
        clientName: '',
        clientEmail: '',
        clientStatus: 'Active', // Assuming default value is 'Active'
        clientPassword: '',
      });
    
      // Update form data when selectedClient changes
      useEffect(() => {
        if (selectedClient) {
          setFormData({
            clientName: selectedClient.clientName || '',
            clientEmail: selectedClient.clientEmail || '',
            clientStatus: selectedClient.clientStatus || 'Active',
            clientPassword: '', 
          });
        }
      }, [selectedClient]);
    
  return (
    <div>
        <div className="add-client-form">
            <form>
                <h2>Edit Client Profile</h2>

                <div className="form-group">
                    <label for="clientName">Client Name:</label>
                      <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        required
                     />
                </div>

                <div className="form-group">
                    <label for="clientEmail">Client Email:</label>
                    <input type="email" id="clientEmail" name="clientEmail" required/>
                </div>
                <div className="form-group">
                    <label for="clientStatus">Client Status:</label>
                    <select name="Status" id="clientStatus">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="clientPassword">Password:</label>
                    <input type="password" id="clientPassword" name="clientPassword" required/>
                </div>
                <button type="submit" className="add-client-btn">
                    <span className="btn-text">Edit Client</span>
                </button>
            </form>
        </div>
    </div>
  )
}

export default Clienteditform