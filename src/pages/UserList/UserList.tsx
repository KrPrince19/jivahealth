import React, { useState } from 'react';
import { useAppStore } from '../../store/useAppStore';
import { Button } from '../../components/UI/Button';
import { StatCard } from '../../components/UI/StatCard';
import { Badge } from '../../components/UI/Badge';
import { Avatar } from '../../components/UI/Avatar';
import { Plus, Search, ChevronDown, Mail, Phone, Calendar, Activity, ArrowRight, Eye, Edit2, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AddUserModal } from '../../components/UI/AddUserModal';

export const UserList: React.FC = () => {
  const users = useAppStore(state => state.users);
  const navigate = useNavigate();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [roleFilter, setRoleFilter] = useState('All');
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  // Stats
  const totalUsers = users.length;
  const primeUsers = users.filter(u => u.type === 'Prime').length;
  const nonPrimeUsers = users.filter(u => u.type === 'Normal User' || u.type === 'Support Staff').length;
  const totalFamilyMembers = users.reduce((acc, u) => acc + u.familyMembers.length, 0);

  const filteredUsers = users.filter(u => {
    const matchesSearch = (u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           u.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           u.phone.includes(searchTerm));
    const matchesStatus = statusFilter === 'All' || u.status === statusFilter;
    const matchesRole = roleFilter === 'All' || u.role === roleFilter;
    return matchesSearch && matchesStatus && matchesRole;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--text-main)', marginBottom: '4px' }}>
            User Management
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Manage user accounts and permissions
          </p>
        </div>
        <Button variant="primary" style={{ padding: '0 14px' }} onClick={() => setIsAddUserOpen(true)}>
          <Plus size={16} />
          Add User
          <ArrowRight size={16} />
        </Button>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <StatCard label="Total User" value={totalUsers} />
        <StatCard label="Prime User" value={primeUsers} valueColor="var(--accent-green)" />
        <StatCard label="Non-Prime User" value={nonPrimeUsers} valueColor="var(--primary)" />
        <StatCard label="Total Family members" value={totalFamilyMembers} valueColor="var(--accent-green)" />
      </div>

      {/* Search & Filter */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-light)', borderRadius: '6px',
          padding: '0 16px', height: '43px', width: '712px', gap: '8px'
        }}>
          <Search size={16} color="var(--text-faint)" />
          <input 
            type="text" 
            placeholder="Search by patient, doctor, or specialty."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: 'var(--text-main)' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px', height: '44px', padding: '0 16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent', appearance: 'none', fontSize: '14px', color: 'var(--text-black)' }}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <ChevronDown size={14} color="var(--text-black)" style={{ pointerEvents: 'none' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px', height: '44px', padding: '0 16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
          <select 
            value={roleFilter} 
            onChange={(e) => setRoleFilter(e.target.value)}
            style={{ border: 'none', outline: 'none', width: '100%', backgroundColor: 'transparent', appearance: 'none', fontSize: '14px', color: 'var(--text-black)' }}
          >
            <option value="All">All Roles</option>
            <option value="Patient">Patient</option>
            <option value="Nurse">Nurse</option>
          </select>
          <ChevronDown size={14} color="var(--text-black)" style={{ pointerEvents: 'none' }} />
        </div>
      </div>

      {/* User Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredUsers.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'var(--bg-card)', borderRadius: '8px' }}>
            No users found
          </div>
        ) : filteredUsers.map(user => (
          <div key={user.id} className="card-shadow" style={{
            backgroundColor: 'var(--bg-card)', borderRadius: '8px', padding: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Avatar initials={user.name.split(' ').map(n=>n[0]).join('')} size="medium" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-black)' }}>{user.name}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Badge type={user.role}>{user.role}</Badge>
                    <Badge type={user.status}>{user.status}</Badge>
                  </div>
                  <Badge type={user.type}>{user.type}</Badge>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-sub)', fontSize: '14px' }}>
                <Mail size={16} /> {user.email}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-sub)', fontSize: '14px' }}>
                <Phone size={16} /> {user.phone}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-sub)' }}>
                <Calendar size={14} /> Joined
              </div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-main)', marginBottom: '4px' }}>
                {user.joinedDate}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Last: {user.lastActive}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Appointments
              </div>
              <div style={{ fontSize: '24px', fontWeight: 500, color: 'var(--accent-blue)' }}>
                {user.appointmentsCount}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Button variant="primary" style={{ width: 'max-content', padding: '0 16px', backgroundColor: '#F58B12', color: '#fff', border: 'none' }}>
                <Crown size={14} /> Upgrade to Prime
              </Button>
              <Button variant="secondary" style={{ width: 'max-content', padding: '0 16px' }} onClick={() => navigate(`/users/${user.id}`)}>
                <Eye size={14} /> View
              </Button>
              <Button variant="secondary" style={{ width: 'max-content', padding: '0 16px' }}>
                <Edit2 size={14} /> Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      <AddUserModal isOpen={isAddUserOpen} onClose={() => setIsAddUserOpen(false)} />
    </div>
  );
};
