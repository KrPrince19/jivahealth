import React from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        width: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--border-light)',
          position: 'relative'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>
            Add New User
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Create a new user account with role and permissions
          </p>
          <button 
            onClick={onClose}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Full Name *</label>
              <input type="text" placeholder="e.g., John Smith" className="modal-input" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Email *</label>
              <input type="email" placeholder="john.smith@email.com" className="modal-input" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Phone Number</label>
              <input type="text" placeholder="+91 98765 43210" className="modal-input" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Date of Birth</label>
              <input type="date" className="modal-input" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Gender</label>
              <select className="modal-input">
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Blood Group</label>
              <select className="modal-input">
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Area Detail</label>
            <input type="text" placeholder="House/Flat No., Building Name, Street" className="modal-input" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Pin Code</label>
              <input type="text" placeholder="400001" className="modal-input" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>City</label>
              <input type="text" placeholder="Mumbai" className="modal-input" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>State</label>
              <select className="modal-input">
                <option value="">Select state</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-user)' }}>Country</label>
              <input type="text" defaultValue="India" className="modal-input" />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          padding: '24px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px'
        }}>
          <Button variant="secondary" onClick={onClose} style={{ height: '40px', padding: '0 20px', borderRadius: '8px' }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onClose} style={{ height: '40px', padding: '0 20px', borderRadius: '8px', backgroundColor: 'var(--text-main)' }}>
            Add User
          </Button>
        </div>

      </div>
    </div>
  );
};
