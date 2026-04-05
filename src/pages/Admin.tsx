import { useState, ReactNode } from 'react';
import { useData } from '@/lib/DataContext';
import { Competition, Project, Skill } from '@/lib/types';
import { Plus, Trash2, Edit2, Trophy, Folder, Cpu, LogOut, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid password. Try "admin123"');
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="glass glow-border p-8 w-full max-w-md animate-scale-in">
          <h2 className="text-2xl font-display font-bold gradient-text mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground block mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button type="submit" className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <AdminPanel onLogout={() => { setLoggedIn(false); setPassword(''); }} />;
};

const AdminPanel = ({ onLogout }: { onLogout: () => void }) => {
  const [tab, setTab] = useState<'competitions' | 'projects' | 'skills'>('competitions');

  const tabs = [
    { key: 'competitions' as const, label: 'Competitions', icon: Trophy },
    { key: 'projects' as const, label: 'Projects', icon: Folder },
    { key: 'skills' as const, label: 'Skills', icon: Cpu },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-display font-bold gradient-text">Admin Dashboard</h1>
        <button onClick={onLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors glass px-3 py-2 rounded-xl">
          <LogOut size={14} /> Logout
        </button>
      </div>

      <div className="flex gap-2 mb-8">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              tab === t.key ? 'bg-primary text-primary-foreground glow-border' : 'glass glass-hover text-muted-foreground'
            }`}
          >
            <t.icon size={14} /> {t.label}
          </button>
        ))}
      </div>

      {tab === 'competitions' && <CompetitionsAdmin />}
      {tab === 'projects' && <ProjectsAdmin />}
      {tab === 'skills' && <SkillsAdmin />}
    </div>
  );
};

// Modal wrapper
const Modal = ({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm" onClick={onClose}>
      <div className="glass glow-border p-6 w-full max-w-lg max-h-[85vh] overflow-y-auto animate-scale-in" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X size={18} /></button>
        </div>
        {children}
      </div>
    </div>
  );
};

const InputField = ({ label, value, onChange, type = 'text', placeholder = '' }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) => (
  <div>
    <label className="text-sm text-muted-foreground block mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
    />
  </div>
);

const SelectField = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) => (
  <div>
    <label className="text-sm text-muted-foreground block mb-1">{label}</label>
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
    >
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  </div>
);

// Competitions Admin
const CompetitionsAdmin = () => {
  const { competitions, addCompetition, updateCompetition, deleteCompetition } = useData();
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Competition | null>(null);

  const blank: Competition = { id: '', name: '', category: 'hackathon', image: '', description: '', result: 'Participant', technologies: [], tags: [], date: '' };
  const [form, setForm] = useState<Competition>(blank);

  const openNew = () => { setForm({ ...blank, id: Math.random().toString(36).substr(2, 9) }); setEditing(null); setModal(true); };
  const openEdit = (c: Competition) => { setForm({ ...c }); setEditing(c); setModal(true); };

  const save = () => {
    if (!form.name) return;
    if (editing) updateCompetition(form);
    else addCompetition(form);
    setModal(false);
  };

  return (
    <div>
      <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium mb-6 hover:opacity-90 transition-opacity">
        <Plus size={14} /> Add Competition
      </button>

      <div className="space-y-3">
        {competitions.map(c => (
          <div key={c.id} className="glass p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-foreground truncate">{c.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{c.category} · {c.result}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => openEdit(c)} className="p-2 rounded-lg glass glass-hover text-muted-foreground hover:text-foreground"><Edit2 size={14} /></button>
              <button onClick={() => deleteCompetition(c.id)} className="p-2 rounded-lg glass glass-hover text-destructive"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Competition' : 'New Competition'}>
        <div className="space-y-3">
          <InputField label="Name" value={form.name} onChange={v => setForm({ ...form, name: v })} />
          <SelectField label="Category" value={form.category} onChange={v => setForm({ ...form, category: v as Competition['category'] })} options={[
            { value: 'hackathon', label: 'Hackathon' }, { value: 'datathon', label: 'Datathon' }, { value: 'startup', label: 'Startup Competition' }
          ]} />
          <SelectField label="Result" value={form.result} onChange={v => setForm({ ...form, result: v as Competition['result'] })} options={[
            { value: 'Winner', label: 'Winner' }, { value: 'Finalist', label: 'Finalist' }, { value: 'Participant', label: 'Participant' }
          ]} />
          <InputField label="Image URL" value={form.image} onChange={v => setForm({ ...form, image: v })} placeholder="https://..." />
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Description</label>
            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3}
              className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" />
          </div>
          <InputField label="Technologies (comma-separated)" value={form.technologies.join(', ')} onChange={v => setForm({ ...form, technologies: v.split(',').map(s => s.trim()).filter(Boolean) })} />
          <InputField label="Tags (comma-separated)" value={form.tags.join(', ')} onChange={v => setForm({ ...form, tags: v.split(',').map(s => s.trim()).filter(Boolean) })} />
          <InputField label="Date" value={form.date} onChange={v => setForm({ ...form, date: v })} placeholder="2024-03" />
          <button onClick={save} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mt-2">
            {editing ? 'Update' : 'Create'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Projects Admin
const ProjectsAdmin = () => {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);

  const blank: Project = { id: '', title: '', screenshot: '', techStack: [], description: '', demoLink: '#', githubLink: '#', tags: [] };
  const [form, setForm] = useState<Project>(blank);

  const openNew = () => { setForm({ ...blank, id: Math.random().toString(36).substr(2, 9) }); setEditing(null); setModal(true); };
  const openEdit = (p: Project) => { setForm({ ...p }); setEditing(p); setModal(true); };

  const save = () => {
    if (!form.title) return;
    if (editing) updateProject(form);
    else addProject(form);
    setModal(false);
  };

  return (
    <div>
      <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium mb-6 hover:opacity-90 transition-opacity">
        <Plus size={14} /> Add Project
      </button>

      <div className="space-y-3">
        {projects.map(p => (
          <div key={p.id} className="glass p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-foreground truncate">{p.title}</p>
              <p className="text-xs text-muted-foreground">{p.techStack.join(', ')}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => openEdit(p)} className="p-2 rounded-lg glass glass-hover text-muted-foreground hover:text-foreground"><Edit2 size={14} /></button>
              <button onClick={() => deleteProject(p.id)} className="p-2 rounded-lg glass glass-hover text-destructive"><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title={editing ? 'Edit Project' : 'New Project'}>
        <div className="space-y-3">
          <InputField label="Title" value={form.title} onChange={v => setForm({ ...form, title: v })} />
          <InputField label="Screenshot URL" value={form.screenshot} onChange={v => setForm({ ...form, screenshot: v })} placeholder="https://..." />
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Description</label>
            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3}
              className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none" />
          </div>
          <InputField label="Tech Stack (comma-separated)" value={form.techStack.join(', ')} onChange={v => setForm({ ...form, techStack: v.split(',').map(s => s.trim()).filter(Boolean) })} />
          <InputField label="Tags (comma-separated)" value={form.tags.join(', ')} onChange={v => setForm({ ...form, tags: v.split(',').map(s => s.trim()).filter(Boolean) })} />
          <InputField label="Demo Link" value={form.demoLink} onChange={v => setForm({ ...form, demoLink: v })} />
          <InputField label="GitHub Link" value={form.githubLink} onChange={v => setForm({ ...form, githubLink: v })} />
          <InputField label="Video Link (optional)" value={form.videoLink || ''} onChange={v => setForm({ ...form, videoLink: v || undefined })} />
          <button onClick={save} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mt-2">
            {editing ? 'Update' : 'Create'}
          </button>
        </div>
      </Modal>
    </div>
  );
};

// Skills Admin
const SkillsAdmin = () => {
  const { skills, addSkill, deleteSkill } = useData();
  const [modal, setModal] = useState(false);
  const blank: Skill = { id: '', name: '', icon: 'Code', description: '', level: 50, category: 'tech' };
  const [form, setForm] = useState<Skill>(blank);

  const openNew = () => { setForm({ ...blank, id: Math.random().toString(36).substr(2, 9) }); setModal(true); };
  const save = () => { if (!form.name) return; addSkill(form); setModal(false); };

  return (
    <div>
      <button onClick={openNew} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium mb-6 hover:opacity-90 transition-opacity">
        <Plus size={14} /> Add Skill
      </button>

      <div className="space-y-3">
        {skills.map(s => (
          <div key={s.id} className="glass p-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-foreground truncate">{s.name}</p>
              <p className="text-xs text-muted-foreground capitalize">{s.category} · {s.level}%</p>
            </div>
            <button onClick={() => deleteSkill(s.id)} className="p-2 rounded-lg glass glass-hover text-destructive shrink-0"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>

      <Modal open={modal} onClose={() => setModal(false)} title="New Skill">
        <div className="space-y-3">
          <InputField label="Name" value={form.name} onChange={v => setForm({ ...form, name: v })} />
          <InputField label="Icon (Lucide icon name)" value={form.icon} onChange={v => setForm({ ...form, icon: v })} placeholder="Code, Brain, Zap..." />
          <InputField label="Description" value={form.description} onChange={v => setForm({ ...form, description: v })} />
          <SelectField label="Category" value={form.category} onChange={v => setForm({ ...form, category: v as 'tech' | 'other' })} options={[
            { value: 'tech', label: 'Tech Stack' }, { value: 'other', label: 'Other Skill' }
          ]} />
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Level ({form.level}%)</label>
            <input type="range" min={0} max={100} value={form.level} onChange={e => setForm({ ...form, level: parseInt(e.target.value) })}
              className="w-full accent-[hsl(var(--primary))]" />
          </div>
          <button onClick={save} className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity mt-2">
            Create
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminPage;
