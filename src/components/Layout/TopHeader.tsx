import React from 'react';
import { PanelLeft, Search, Moon, Bell } from 'lucide-react';
import { Avatar } from '../UI/Avatar';

export const TopHeader: React.FC = () => {
  return (
    <header style={{
      height: 'var(--header-height)',
      backgroundColor: 'var(--bg-card)',
      borderWidth: '0px 0px 1px 1px',
      borderStyle: 'solid',
      borderColor: '#F0F1F2',
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      position: 'relative',
      width: '100%'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', padding: 0
        }}>
          <img src="/Logo Container.png" alt="Toggle Menu" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>
      </div>

      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid var(--border-light)',
          borderRadius: '6px',
          padding: '8px 12px',
          width: '388px',
          height: '35px',
          gap: '12px',
          backgroundColor: 'var(--bg-input)'
        }}>
          <Search size={16} color="var(--text-faint)" />
          <input 
            type="text" 
            placeholder="Search by patient, doctor, or specialty." 
            style={{
              border: 'none', outline: 'none', width: '100%',
              fontFamily: 'var(--font-family)', fontSize: '16px',
              fontWeight: 500, lineHeight: 1, backgroundColor: 'transparent'
            }} 
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginLeft: 'auto'
      }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
          <Moon size={20} />
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}>
          <Bell size={20} color="var(--text-main)" />
          <span style={{
            position: 'absolute', top: '-2px', right: '-2px',
            backgroundColor: 'var(--danger)', color: 'white',
            fontSize: '10px', fontWeight: 'bold', width: '16px', height: '16px',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>1</span>
        </button>
        <Avatar initials="AD" size="small" />
      </div>
    </header>
  );
};
