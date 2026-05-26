import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppStore } from '../../store/useAppStore';
import { 
  ChevronLeft, Calendar, Activity, Crown, ChevronDown, 
  ShoppingBag, CreditCard, User as UserIcon, ClipboardList, Users,
  Mail, Phone, Heart, Edit2, Plus, MapPin, CheckCircle, Check
} from 'lucide-react';
import { Avatar } from '../../components/UI/Avatar';
import { Badge } from '../../components/UI/Badge';
import { Button } from '../../components/UI/Button';
import { StatCard } from '../../components/UI/StatCard';

export const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const users = useAppStore(state => state.users);
  const updateUserStatus = useAppStore(state => state.updateUserStatus);
  
  const user = users.find(u => u.id === Number(id));
  const [activeTab, setActiveTab] = useState('Overview');
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);

  if (!user) return <div style={{ padding: '40px' }}>User not found</div>;

  const totalSpent = user.orders.reduce((acc, order) => acc + order.amount, 0) + 
                     user.payments.reduce((acc, pay) => acc + pay.amount, 0);

  const tabs = [
    { id: 'Overview', icon: UserIcon },
    { id: 'Orders & Bookings', icon: ClipboardList },
    { id: 'Payments', icon: CreditCard },
    { id: 'Family Members', icon: Users },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Back Button */}
      <div 
        onClick={() => navigate('/users')}
        style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', color: 'var(--text-sub)', fontSize: '14px', fontWeight: 500 }}
      >
        <ChevronLeft size={16} /> Back to User Management
      </div>

      {/* Profile Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Avatar initials={user.name.split(' ').map(n=>n[0]).join('')} size="large" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 500, color: 'var(--text-user)' }}>{user.name}</h1>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Badge type={user.status}>{user.status}</Badge>
              <Badge type={user.role}>{user.role}</Badge>
              <Badge type={user.type}>{user.type}</Badge>
              <span style={{ fontSize: '14px', color: 'var(--text-sub)' }}>ID: #{user.id}</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: 'var(--text-sub)', marginTop: '4px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> Joined {user.joinedDate}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14} /> Last active {user.lastActive}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="primary" style={{ width: '165px', height: '41px', backgroundColor: '#F58B12', color: '#fff', border: 'none' }}>
            <Crown size={16} /> Upgrade to Prime
          </Button>
          <div style={{ position: 'relative' }}>
            <Button 
              variant="secondary" 
              style={{ width: '200px', height: '41px', justifyContent: 'space-between' }}
              onClick={() => setIsStatusMenuOpen(!isStatusMenuOpen)}
            >
              {user.status} <ChevronDown size={16} />
            </Button>
            {isStatusMenuOpen && (
              <div style={{
                position: 'absolute', top: '100%', right: 0, marginTop: '4px',
                width: '100%', backgroundColor: '#fff',
                borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid var(--border-light)', zIndex: 10
              }}>
                <div 
                  onClick={() => {
                    updateUserStatus(user.id, 'Active');
                    setIsStatusMenuOpen(false);
                  }}
                  style={{
                    padding: '10px 16px', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', cursor: 'pointer',
                    backgroundColor: user.status === 'Active' ? 'var(--bg-page)' : 'transparent',
                    borderRadius: '8px 8px 0 0',
                    color: 'var(--text-main)', fontSize: '14px'
                  }}
                >
                  Active {user.status === 'Active' && <Check size={16} />}
                </div>
                <div 
                  onClick={() => {
                    updateUserStatus(user.id, 'Inactive');
                    setIsStatusMenuOpen(false);
                  }}
                  style={{
                    padding: '10px 16px', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', cursor: 'pointer',
                    backgroundColor: user.status === 'Inactive' ? 'var(--bg-page)' : 'transparent',
                    borderRadius: '0 0 8px 8px',
                    color: 'var(--text-main)', fontSize: '14px'
                  }}
                >
                  Inactive {user.status === 'Inactive' && <Check size={16} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'flex', gap: '16px' }}>
        <StatCard label="Total Orders" value={user.orders.length} icon={<ShoppingBag size={24} />} iconBgColor="var(--icon-bg-blue)" />
        <StatCard label="Total Booking & Appt" value={user.appointmentsCount} valueColor="var(--accent-green)" icon={<Calendar size={24} />} iconBgColor="var(--icon-bg-teal)" />
        <StatCard label="Total Family Member" value={user.familyMembers.length} valueColor="var(--primary)" />
        <StatCard label="Total Spent" value={`₹${totalSpent.toFixed(2)}`} icon={<CreditCard size={24} />} iconBgColor="var(--badge-green-bg)" />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid var(--border-light)' }}>
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '12px', cursor: 'pointer',
                color: isActive ? 'var(--primary)' : 'var(--text-main)',
                borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                fontSize: '14px', fontWeight: 500, marginBottom: '-1px'
              }}
            >
              <tab.icon size={18} /> {tab.id}
            </div>
          );
        })}
      </div>

      {/* Tab Content */}
      <div style={{ marginTop: '8px' }}>
        {activeTab === 'Overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            {/* Personal Info Panel */}
            <div className="card-shadow" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '16px', color: 'var(--text-main)', fontWeight: 500 }}>Personal Information</h2>
                <Button variant="secondary" style={{ padding: '0 12px' }}><Edit2 size={14} /> Edit</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: Mail, label: 'Email', value: user.email },
                  { icon: Phone, label: 'Phone', value: user.phone },
                  { icon: Calendar, label: 'Date of Birth', value: user.dob },
                  { icon: UserIcon, label: 'Gender', value: user.gender },
                  { icon: Heart, label: 'Blood Group', value: user.bloodGroup },
                ].map((info, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '140px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--label-teal)', fontSize: '14px' }}>
                      <info.icon size={16} /> {info.label}:
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-main)' }}>{info.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Addresses Panel */}
            <div className="card-shadow" style={{ backgroundColor: 'var(--bg-card)', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '16px', color: 'var(--text-main)', fontWeight: 500 }}>Addresses</h2>
                <Button variant="secondary" style={{ padding: '0 12px' }}><Plus size={14} /> Add</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {user.addresses.map((addr) => (
                  <div key={addr.id} style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--bg-page)', padding: '16px', borderRadius: '8px' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--icon-bg-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      <MapPin size={16} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-main)' }}>{addr.type}</span>
                        {addr.isDefault && <Badge type="Default">Default</Badge>}
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--text-sub)', lineHeight: 1.5 }}>
                        {addr.line1}<br/>{addr.line2}<br/>{addr.country}
                      </div>
                    </div>
                  </div>
                ))}
                {user.addresses.length === 0 && <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No addresses found.</span>}
              </div>
            </div>
            
            {/* Recent Activity (Full width) */}
            <div className="card-shadow" style={{ gridColumn: '1 / -1', backgroundColor: 'var(--bg-card)', borderRadius: '8px', padding: '24px' }}>
              <h2 style={{ fontSize: '16px', color: 'var(--text-black)', fontWeight: 500, marginBottom: '20px' }}>Recent Activity</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--badge-green-bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)' }}><CheckCircle size={16} /></div>
                    <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-main)' }}>Consultation Completed</span>
                    <span style={{ fontSize: '14px', color: 'var(--text-faint)' }}>with Dr. Sarah Johnson - General Checkup</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: 'auto' }}>2 days ago</span>
                 </div>
              </div>
            </div>

          </div>
        )}

        {/* Orders & Bookings / Payments / Family Members would go here */}
        {activeTab !== 'Overview' && (
          <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'var(--bg-card)', borderRadius: '8px' }}>
             Content for {activeTab} (Mock layout for demonstration)
          </div>
        )}
      </div>
    </div>
  );
};
