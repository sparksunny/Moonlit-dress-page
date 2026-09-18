import React, { useState, useRef } from 'react';
import {
  X,
  Plus,
  Edit2,
  Trash2,
  Upload,
  Image as ImageIcon,
  Check,
  RotateCcw,
  LogOut,
  Sparkles,
  FileText,
  Sliders,
  Layers,
  Search,
  ArrowLeft,
  Download,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { DressDetail, SiteContent } from '../types';

interface AdminControlPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  bridalDresses: DressDetail[];
  partyDresses: DressDetail[];
  siteContent: SiteContent;
  onSaveDresses: (bridal: DressDetail[], party: DressDetail[]) => void;
  onSaveSiteContent: (content: SiteContent) => void;
  onResetToDefaults: () => void;
  initialEditDress?: DressDetail | null;
}

type ActiveTab = 'products' | 'add-product' | 'content' | 'settings';

export const AdminControlPanelModal: React.FC<AdminControlPanelModalProps> = ({
  isOpen,
  onClose,
  onLogout,
  bridalDresses,
  partyDresses,
  siteContent,
  onSaveDresses,
  onSaveSiteContent,
  onResetToDefaults,
  initialEditDress = null,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialEditDress ? 'add-product' : 'products');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<'All' | 'Bridal Collection' | 'Party Wear'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingDress, setEditingDress] = useState<DressDetail | null>(initialEditDress);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Dress Form State
  const [formCategory, setFormCategory] = useState<'Bridal Collection' | 'Party Wear'>('Bridal Collection');
  const [formName, setFormName] = useState('');
  const [formSubtitle, setFormSubtitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formLongDescription, setFormLongDescription] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formFabrics, setFormFabrics] = useState('');
  const [formCraftsmanship, setFormCraftsmanship] = useState('');
  const [formPerfectFor, setFormPerfectFor] = useState('');
  const [formFeatures, setFormFeatures] = useState('');
  const [formColorPalette, setFormColorPalette] = useState('');

  // Site Content State
  const [contentForm, setContentForm] = useState<SiteContent>(siteContent);

  // In-modal dialog states (no window.confirm to prevent iframe suppression)
  const [dressToDelete, setDressToDelete] = useState<{ id: string; name: string } | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);

  // Form References for bottom bar submit triggers
  const productFormRef = useRef<HTMLFormElement>(null);
  const contentFormRef = useRef<HTMLFormElement>(null);

  // Quick Image Change Modal State
  const [quickImageTargetDress, setQuickImageTargetDress] = useState<DressDetail | null>(null);
  const [quickImageUrl, setQuickImageUrl] = useState('');

  // File Input References
  const dressFileInputRef = useRef<HTMLInputElement>(null);
  const quickFileInputRef = useRef<HTMLInputElement>(null);
  const heroFileInputRef = useRef<HTMLInputElement>(null);

  // Sync when initialEditDress changes
  React.useEffect(() => {
    if (initialEditDress) {
      loadDressIntoForm(initialEditDress);
      setActiveTab('add-product');
    }
  }, [initialEditDress]);

  // Sync siteContent when it updates
  React.useEffect(() => {
    setContentForm(siteContent);
  }, [siteContent]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const allDresses = [...bridalDresses, ...partyDresses];

  const filteredDresses = allDresses.filter((dress) => {
    const matchesCategory =
      selectedCategoryFilter === 'All' || dress.category === selectedCategoryFilter;
    const matchesSearch =
      dress.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dress.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dress.fabrics.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const loadDressIntoForm = (dress: DressDetail) => {
    setEditingDress(dress);
    setFormCategory(dress.category);
    setFormName(dress.name);
    setFormSubtitle(dress.subtitle);
    setFormDescription(dress.description);
    setFormLongDescription(dress.longDescription);
    setFormImage(dress.image);
    setFormFabrics(dress.fabrics);
    setFormCraftsmanship(dress.craftsmanship);
    setFormPerfectFor(dress.perfectFor.join(', '));
    setFormFeatures(dress.features.join('\n'));
    setFormColorPalette(
      dress.colorPalette.map((c) => `${c.name}: ${c.hex}`).join(', ')
    );
  };

  const handleStartAddProduct = () => {
    setEditingDress(null);
    setFormCategory('Bridal Collection');
    setFormName('');
    setFormSubtitle('');
    setFormDescription('');
    setFormLongDescription('');
    setFormImage('https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=80');
    setFormFabrics('Pure Organza, Katan Silk');
    setFormCraftsmanship('Zardozi, Marori, Hand-Cut Dabka, Seed Pearls');
    setFormPerfectFor('Barat, Walima, Reception, Formal Evening');
    setFormFeatures('Pure Hand-Embroidered Silhouette\nContrasting Fine Silk Dupatta\nHandcrafted Tassels\nScalloped Zari Borders');
    setFormColorPalette('Champagne: #E6D8C8, Warm Ivory: #FAF6EE, Gold: #DFC6AE');
    setActiveTab('add-product');
  };

  const handleFileToDataUrl = (
    e: React.ChangeEvent<HTMLInputElement>,
    onSuccess: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please choose a valid image file (JPG, PNG, WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onSuccess(result);
        showToast('Image loaded successfully!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) {
      alert('Please enter a product name.');
      return;
    }

    // Parse color palette
    const colorItems = formColorPalette
      .split(',')
      .map((item) => {
        const parts = item.split(':');
        const name = parts[0]?.trim() || 'Ivory';
        const hex = parts[1]?.trim() || '#FAF6EE';
        return { name, hex };
      })
      .filter((c) => c.name);

    // Parse perfectFor
    const perfectForList = formPerfectFor
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    // Parse features
    const featuresList = formFeatures
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    const updatedDress: DressDetail = {
      id: editingDress ? editingDress.id : `custom-${Date.now()}`,
      name: formName.trim(),
      subtitle: formSubtitle.trim() || 'Bespoke Handcrafted Pakistani Couture',
      category: formCategory,
      description: formDescription.trim(),
      longDescription: formLongDescription.trim() || formDescription.trim(),
      image: formImage.trim() || 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=80',
      fabrics: formFabrics.trim() || 'Pure Silk, Organza',
      craftsmanship: formCraftsmanship.trim() || 'Handcrafted Zari & Resham',
      perfectFor: perfectForList.length > 0 ? perfectForList : ['Festive', 'Formal'],
      features: featuresList.length > 0 ? featuresList : ['Fine Artisanal Tailoring'],
      colorPalette: colorItems.length > 0 ? colorItems : [{ name: 'Ivory', hex: '#FAF6EE' }],
    };

    let newBridal = [...bridalDresses];
    let newParty = [...partyDresses];

    if (editingDress) {
      // Remove from both lists first
      newBridal = newBridal.filter((d) => d.id !== editingDress.id);
      newParty = newParty.filter((d) => d.id !== editingDress.id);

      // Insert into target category list
      if (updatedDress.category === 'Bridal Collection') {
        newBridal.push(updatedDress);
      } else {
        newParty.push(updatedDress);
      }
      showToast(`Updated "${updatedDress.name}" successfully!`);
    } else {
      // New product
      if (updatedDress.category === 'Bridal Collection') {
        newBridal.unshift(updatedDress);
      } else {
        newParty.unshift(updatedDress);
      }
      showToast(`Added new product "${updatedDress.name}"!`);
    }

    onSaveDresses(newBridal, newParty);
    setEditingDress(null);
    setActiveTab('products');
  };

  const handleDeleteDress = (dressId: string, dressName: string) => {
    setDressToDelete({ id: dressId, name: dressName });
  };

  const confirmDeleteDress = () => {
    if (!dressToDelete) return;
    const { id: dressId, name: dressName } = dressToDelete;
    const newBridal = bridalDresses.filter((d) => d.id !== dressId);
    const newParty = partyDresses.filter((d) => d.id !== dressId);
    onSaveDresses(newBridal, newParty);
    showToast(`Removed "${dressName}".`);
    setDressToDelete(null);
  };

  const confirmResetToDefaults = () => {
    onResetToDefaults();
    showToast('Restored original catalog defaults!');
    setActiveTab('products');
    setShowResetModal(false);
  };

  const handleApplyQuickImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickImageTargetDress || !quickImageUrl.trim()) return;

    const newBridal = bridalDresses.map((d) =>
      d.id === quickImageTargetDress.id ? { ...d, image: quickImageUrl.trim() } : d
    );
    const newParty = partyDresses.map((d) =>
      d.id === quickImageTargetDress.id ? { ...d, image: quickImageUrl.trim() } : d
    );

    onSaveDresses(newBridal, newParty);
    showToast(`Updated photo for "${quickImageTargetDress.name}"!`);
    setQuickImageTargetDress(null);
    setQuickImageUrl('');
  };

  const handleSaveContent = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSiteContent(contentForm);
    showToast('Page texts and brand information updated successfully!');
  };

  const handleExportCatalog = () => {
    const data = {
      siteContent,
      bridalDresses,
      partyDresses,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `moonlit-closet-catalog-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Catalog exported as JSON backup.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#180E07]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl h-[92vh] max-h-[900px] flex flex-col bg-[#FAF7F2] rounded-2xl sm:rounded-3xl border border-[#DFCEBA] shadow-2xl overflow-hidden text-[#322016]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#322016] text-[#FAF7F0] text-xs uppercase tracking-wider font-medium shadow-xl border border-[#D5B895] animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-4 h-4 text-[#D5B895]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 1. Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#E7DDD0] bg-[#FAF5ED]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#322016] text-[#FAF7F0] flex items-center justify-center shadow-xs">
              <Sliders className="w-4 h-4 text-[#D5B895]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg sm:text-xl font-normal text-[#2A1A11]">
                  Moonlit Atelier Admin
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E5D7C7] text-[#4F3B2C] border border-[#D8C6B1] font-semibold uppercase tracking-wider">
                  Admin Online
                </span>
              </div>
              <p className="text-[11px] text-[#7C6756] font-light hidden sm:block">
                Edit catalog products, update dress photography, and modify all website copy in real time.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="admin-panel-logout-btn"
              onClick={() => {
                onLogout();
              }}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5484D]/10 hover:bg-[#E5484D]/20 text-[#A82A2A] text-xs font-semibold border border-[#E5484D]/25 transition-colors"
              title="Log out of admin session"
            >
              <LogOut className="w-3.5 h-3.5 text-[#A82A2A]" />
              <span>Log Out</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 text-[#7C6756] hover:text-[#2A1A11] hover:bg-[#EFE5D8] rounded-full transition-colors"
              aria-label="Close admin control panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2. Navigation Tabs */}
        <div className="flex items-center gap-1 px-5 sm:px-7 py-2.5 bg-[#FAF7F2] border-b border-[#EAE0D3] overflow-x-auto scrollbar-none">
          <button
            type="button"
            onClick={() => {
              setActiveTab('products');
              setEditingDress(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
              activeTab === 'products'
                ? 'bg-[#322016] text-[#FAF7F0] shadow-xs'
                : 'text-[#695443] hover:bg-[#EFE4D4] hover:text-[#2A1A11]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#D5B895]" />
            <span>Manage Products ({allDresses.length})</span>
          </button>

          <button
            type="button"
            onClick={handleStartAddProduct}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
              activeTab === 'add-product' && !editingDress
                ? 'bg-[#322016] text-[#FAF7F0] shadow-xs'
                : 'text-[#695443] hover:bg-[#EFE4D4] hover:text-[#2A1A11]'
            }`}
          >
            <Plus className="w-3.5 h-3.5 text-[#D5B895]" />
            <span>+ Add Product</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('content');
              setEditingDress(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-[#322016] text-[#FAF7F0] shadow-xs'
                : 'text-[#695443] hover:bg-[#EFE4D4] hover:text-[#2A1A11]'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#D5B895]" />
            <span>Edit Page Texts</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('settings');
              setEditingDress(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-[#322016] text-[#FAF7F0] shadow-xs'
                : 'text-[#695443] hover:bg-[#EFE4D4] hover:text-[#2A1A11]'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#D5B895]" />
            <span>Backup &amp; Reset</span>
          </button>
        </div>

        {/* 3. Main Modal Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">

          {/* TAB A: MANAGE PRODUCTS */}
          {activeTab === 'products' && (
            <div className="space-y-5">
              {/* Filter & Action Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-[#EAE0D3]">
                <div className="flex items-center gap-2">
                  {(['All', 'Bridal Collection', 'Party Wear'] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        selectedCategoryFilter === cat
                          ? 'bg-[#402D20] text-[#FAF7F0]'
                          : 'bg-[#EFE6DA] text-[#594637] hover:bg-[#E5D7C7]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative flex-1 sm:w-60">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#98816E]" />
                    <input
                      type="text"
                      placeholder="Search dresses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FFFFFF] rounded-xl border border-[#DECBB8] focus:outline-hidden focus:border-[#866345] text-[#2A1A11]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleStartAddProduct}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#D5B895]" />
                    <span>Add New</span>
                  </button>
                </div>
              </div>

              {/* Product Cards Table / Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredDresses.map((dress) => (
                  <div
                    key={dress.id}
                    className="flex gap-3.5 p-3 rounded-xl bg-[#FFFFFF] border border-[#E8DDD0] hover:border-[#D5B895] transition-all shadow-2xs group"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-26 rounded-lg overflow-hidden bg-[#EFE9DF] shrink-0 border border-[#E6DCCE]">
                      <img
                        src={dress.image}
                        alt={dress.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setQuickImageTargetDress(dress);
                          setQuickImageUrl(dress.image);
                        }}
                        className="absolute inset-0 bg-[#24160E]/60 text-[#FAF7F0] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 text-[9px] uppercase tracking-wider font-semibold transition-opacity"
                        title="Change photo for this dress"
                      >
                        <Upload className="w-3.5 h-3.5 text-[#D5B895]" />
                        <span>Change</span>
                      </button>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif text-base font-normal text-[#2C1D14] truncate">
                            {dress.name}
                          </h4>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF7F0] border border-[#E3D4C2] text-[#695443] shrink-0">
                            {dress.category === 'Bridal Collection' ? 'Bridal' : 'Party'}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#7E6958] truncate font-light mt-0.5">
                          {dress.subtitle}
                        </p>
                        <p className="text-[11px] text-[#A18C7A] line-clamp-2 mt-1 leading-snug">
                          {dress.description}
                        </p>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 pt-2 border-t border-[#F2ECE3] mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            loadDressIntoForm(dress);
                            setActiveTab('add-product');
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EFE6DA] hover:bg-[#E3D3C1] text-[#3D291B] text-[11px] font-medium transition-colors"
                        >
                          <Edit2 className="w-3 h-3 text-[#866345]" />
                          <span>Edit Details</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setQuickImageTargetDress(dress);
                            setQuickImageUrl(dress.image);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FAF7F0] hover:bg-[#EFE6DA] text-[#6E5948] text-[11px] font-medium border border-[#E8DDD0] transition-colors"
                        >
                          <ImageIcon className="w-3 h-3 text-[#A88C72]" />
                          <span>Photo</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDeleteDress(dress.id, dress.name)}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[#9B3737] hover:bg-[#FBEAEA] text-[11px] font-medium ml-auto transition-colors"
                          title="Delete dress"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredDresses.length === 0 && (
                <div className="text-center py-12 text-[#9B8775]">
                  <p className="text-sm">No dresses match your search criteria.</p>
                </div>
              )}
            </div>
          )}

          {/* TAB B: ADD / EDIT PRODUCT FORM */}
          {activeTab === 'add-product' && (
            <form ref={productFormRef} onSubmit={handleSaveProduct} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE0D3]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('products');
                      setEditingDress(null);
                    }}
                    className="p-1.5 rounded-lg text-[#7C6756] hover:bg-[#EFE4D4]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <h3 className="font-serif text-xl text-[#2B1B12] font-normal">
                    {editingDress ? `Edit: ${editingDress.name}` : 'Add New Couture Dress'}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('products');
                      setEditingDress(null);
                    }}
                    className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EFE4D4] font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="admin-save-product-top-btn"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-xs transition-colors"
                  >
                    <Check className="w-4 h-4 text-[#D5B895]" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Image Upload & Preview (Cols 1-4) */}
                <div className="lg:col-span-4 space-y-3">
                  <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold">
                    Product Photography
                  </label>

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#EAE2D5] border-2 border-dashed border-[#D2BEA8] flex flex-col items-center justify-center p-2 group">
                    {formImage ? (
                      <img
                        src={formImage}
                        alt="Preview"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top rounded-xl"
                      />
                    ) : (
                      <div className="text-center p-4 text-[#8C7664]">
                        <ImageIcon className="w-10 h-10 mx-auto mb-2 opacity-60" />
                        <span className="text-xs">No image chosen</span>
                      </div>
                    )}

                    {/* Hover overlay to upload */}
                    <div className="absolute inset-0 bg-[#25170F]/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                      <button
                        type="button"
                        onClick={() => dressFileInputRef.current?.click()}
                        className="px-4 py-2 rounded-xl bg-[#FAF7F0] text-[#2D1D14] text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-white transition-transform active:scale-95"
                      >
                        Upload Photo
                      </button>
                      <span className="text-[10px] text-[#DBCBB9] text-center">
                        Supports JPG, PNG, WEBP from your computer
                      </span>
                    </div>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={dressFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileToDataUrl(e, (url) => setFormImage(url))}
                  />

                  {/* Action row for image */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => dressFileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#EFE6DA] hover:bg-[#E3D3C1] text-[#3D291B] text-xs font-medium border border-[#D8C7B3] transition-colors"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#866345]" />
                      <span>Upload from PC</span>
                    </button>

                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#8A7564] mb-1">
                        Or Paste Image URL:
                      </span>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] rounded-lg border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Text Information Inputs (Cols 5-12) */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Category & Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Category
                      </label>
                      <select
                        value={formCategory}
                        onChange={(e) =>
                          setFormCategory(e.target.value as 'Bridal Collection' | 'Party Wear')
                        }
                        className="w-full px-3 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      >
                        <option value="Bridal Collection">Bridal Collection</option>
                        <option value="Party Wear">Party Wear</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Dress Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Noor-e-Zahra"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-3.5 py-2 text-sm bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] font-serif"
                      />
                    </div>
                  </div>

                  {/* Subtitle */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                      Subtitle / Tagline
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Heavily Hand-Embroidered Bridal Peshwas &amp; Flared Lehenga"
                      value={formSubtitle}
                      onChange={(e) => setFormSubtitle(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  {/* Short Card Description */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                      Card Summary Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief overview shown on the card..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] leading-relaxed"
                    />
                  </div>

                  {/* Full Detail Long Description */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                      Full Editorial Craftsmanship Narrative (Modal Inspection)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Detailed craftsmanship narrative displayed when customer views dress details..."
                      value={formLongDescription}
                      onChange={(e) => setFormLongDescription(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] leading-relaxed"
                    />
                  </div>

                  {/* Fabrics & Craftsmanship */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Fabrics Used
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Pure Organza, Katan Silk, Micro-Tulle"
                        value={formFabrics}
                        onChange={(e) => setFormFabrics(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Craftsmanship &amp; Techniques
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Zardozi, Marori, Hand-Cut Dabka, Seed Pearls"
                        value={formCraftsmanship}
                        onChange={(e) => setFormCraftsmanship(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      />
                    </div>
                  </div>

                  {/* Perfect For & Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Perfect For Occasions (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="Barat, Walima, Reception, Nikah"
                        value={formPerfectFor}
                        onChange={(e) => setFormPerfectFor(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                        Key Features (one per line)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Intricate Zardozi Resham&#10;Pure Organza Dupatta&#10;Handcrafted Pearl Latkans"
                        value={formFeatures}
                        onChange={(e) => setFormFeatures(e.target.value)}
                        className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                      />
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] text-[#634E3E] font-semibold mb-1">
                      Color Palette Swatches (Format: Name: #Hex, Name: #Hex)
                    </label>
                    <input
                      type="text"
                      placeholder="Warm Ivory: #FAF6EE, Champagne: #EADBCE, Soft Gold: #DFD1B5"
                      value={formColorPalette}
                      onChange={(e) => setFormColorPalette(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs bg-[#FFFFFF] rounded-xl border border-[#D8C7B3] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>
                </div>

                {/* Bottom Save Changes Action Card for Product Form */}
                <div className="lg:col-span-12 p-5 rounded-2xl bg-[#F4EDE2] border border-[#DFCDBB] flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <div>
                    <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#322016] block">
                      {editingDress ? `Save modifications to "${editingDress.name}"` : 'Publish new product to catalog'}
                    </span>
                    <span className="text-[11px] text-[#7C6756]">
                      All details, uploaded photography, and fabric descriptions will be updated instantly.
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveTab('products');
                        setEditingDress(null);
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs text-[#6C5746] hover:bg-[#EAE0D2] font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="admin-save-product-bottom-btn"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-102 shrink-0"
                    >
                      <Check className="w-4 h-4 text-[#D5B895]" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* TAB C: EDIT PAGE TEXTS & BRANDING */}
          {activeTab === 'content' && (
            <form ref={contentFormRef} onSubmit={handleSaveContent} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE0D3]">
                <div>
                  <h3 className="font-serif text-xl text-[#2B1B12] font-normal">
                    Page Text &amp; Brand Settings
                  </h3>
                  <p className="text-xs text-[#7C6756] font-light">
                    Update all headlines, introductions, contact addresses, and hero banners online.
                  </p>
                </div>

                <button
                  type="submit"
                  id="admin-save-content-top-btn"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-xs transition-colors"
                >
                  <Check className="w-4 h-4 text-[#D5B895]" />
                  <span>Save Changes</span>
                </button>
              </div>

              {/* 1. Header & Brand Identity */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#866345] font-semibold border-b border-[#F0E6D8] pb-2">
                  1. Brand Name &amp; Slogan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={contentForm.brandTitle}
                      onChange={(e) =>
                        setContentForm({ ...contentForm, brandTitle: e.target.value })
                      }
                      className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] font-serif"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Brand Slogan
                    </label>
                    <input
                      type="text"
                      value={contentForm.slogan}
                      onChange={(e) =>
                        setContentForm({ ...contentForm, slogan: e.target.value })
                      }
                      className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] font-cormorant italic"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Atelier Showcase / Hero Section */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-4">
                <div className="flex items-center justify-between border-b border-[#F0E6D8] pb-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#866345] font-semibold">
                    2. Atelier Showcase (Hero Section)
                  </h4>
                  <button
                    type="button"
                    onClick={() => heroFileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFE6DA] hover:bg-[#E3D3C1] text-[#3D291B] text-[11px] font-medium transition-colors"
                  >
                    <Upload className="w-3 h-3 text-[#866345]" />
                    <span>Change Hero Photo</span>
                  </button>
                  <input
                    ref={heroFileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      handleFileToDataUrl(e, (url) =>
                        setContentForm({
                          ...contentForm,
                          intro: { ...contentForm.intro, heroImage: url },
                        })
                      )
                    }
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={contentForm.intro.badge}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          intro: { ...contentForm.intro, badge: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Sub-Eyebrow Tag
                    </label>
                    <input
                      type="text"
                      value={contentForm.intro.tag}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          intro: { ...contentForm.intro, tag: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                    Main Headline
                  </label>
                  <input
                    type="text"
                    value={contentForm.intro.title}
                    onChange={(e) =>
                      setContentForm({
                        ...contentForm,
                        intro: { ...contentForm.intro, title: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 text-sm bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] font-serif"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                    Paragraph 1 (Brand Story)
                  </label>
                  <textarea
                    rows={2}
                    value={contentForm.intro.paragraph1}
                    onChange={(e) =>
                      setContentForm({
                        ...contentForm,
                        intro: { ...contentForm.intro, paragraph1: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                    Paragraph 2 (Artisanal Craft Narrative)
                  </label>
                  <textarea
                    rows={2}
                    value={contentForm.intro.paragraph2}
                    onChange={(e) =>
                      setContentForm({
                        ...contentForm,
                        intro: { ...contentForm.intro, paragraph2: e.target.value },
                      })
                    }
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345] leading-relaxed"
                  />
                </div>

                {contentForm.intro.heroImage && (
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#8A7564] mb-1">
                      Hero Image URL:
                    </span>
                    <input
                      type="text"
                      value={contentForm.intro.heroImage}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          intro: { ...contentForm.intro, heroImage: e.target.value },
                        })
                      }
                      className="w-full px-3 py-1.5 text-xs bg-[#FAF7F2] rounded-lg border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>
                )}
              </div>

              {/* 3. Section Titles (Bridal & Party Wear) */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#866345] font-semibold border-b border-[#F0E6D8] pb-2">
                  3. Catalog Section Titles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium">
                      Bridal Section Title &amp; Subtitle
                    </label>
                    <input
                      type="text"
                      value={contentForm.bridal.title}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          bridal: { ...contentForm.bridal, title: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-1.5 text-xs bg-[#FAF7F2] rounded-lg border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                    <input
                      type="text"
                      value={contentForm.bridal.subtitle}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          bridal: { ...contentForm.bridal, subtitle: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-1.5 text-xs bg-[#FAF7F2] rounded-lg border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium">
                      Party Wear Section Title &amp; Subtitle
                    </label>
                    <input
                      type="text"
                      value={contentForm.partyWear.title}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          partyWear: { ...contentForm.partyWear, title: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-1.5 text-xs bg-[#FAF7F2] rounded-lg border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                    <input
                      type="text"
                      value={contentForm.partyWear.subtitle}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          partyWear: { ...contentForm.partyWear, subtitle: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-1.5 text-xs bg-[#FAF7F2] rounded-lg border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>
                </div>
              </div>

              {/* 4. Contact & Atelier Information (Footer) */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-4">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#866345] font-semibold border-b border-[#F0E6D8] pb-2">
                  4. Atelier Contact Information (Footer)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="text"
                      value={contentForm.contact.email}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          contact: { ...contentForm.contact, email: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="text"
                      value={contentForm.contact.phone}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          contact: { ...contentForm.contact, phone: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Atelier Studio Location
                    </label>
                    <input
                      type="text"
                      value={contentForm.contact.address}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          contact: { ...contentForm.contact, address: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.14em] text-[#634E3E] font-medium mb-1">
                      Viewing Hours
                    </label>
                    <input
                      type="text"
                      value={contentForm.contact.hours}
                      onChange={(e) =>
                        setContentForm({
                          ...contentForm,
                          contact: { ...contentForm.contact, hours: e.target.value },
                        })
                      }
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] rounded-xl border border-[#DECBB8] text-[#2A1A11] focus:outline-hidden focus:border-[#866345]"
                    />
                  </div>
                </div>
              </div>

              {/* 5. Bottom Save Changes Action Card for Page Text Form */}
              <div className="p-5 rounded-2xl bg-[#F4EDE2] border border-[#DFCDBB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#322016] block">
                    Save all website text changes
                  </span>
                  <span className="text-[11px] text-[#7C6756]">
                    Clicking Save Changes instantly updates your header, introductory stories, collection descriptions, and atelier address.
                  </span>
                </div>
                <button
                  type="submit"
                  id="admin-save-content-bottom-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-102 shrink-0"
                >
                  <Check className="w-4 h-4 text-[#D5B895]" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB D: BACKUP, EXPORT & RESET */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="pb-3 border-b border-[#EAE0D3]">
                <h3 className="font-serif text-xl text-[#2B1B12] font-normal">
                  Backup &amp; Factory Reset
                </h3>
                <p className="text-xs text-[#7C6756] font-light">
                  Save a copy of your custom products and text, or revert back to initial factory defaults.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Export JSON */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EFE6DA] text-[#866345] flex items-center justify-center">
                    <Download className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base text-[#2C1D14] font-normal">
                    Export Catalog (JSON Backup)
                  </h4>
                  <p className="text-xs text-[#7D6857] font-light leading-relaxed">
                    Download a complete backup file containing all current dresses, uploaded images, and custom page text.
                  </p>
                  <button
                    type="button"
                    onClick={handleExportCatalog}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#322016] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#483324] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#D5B895]" />
                    <span>Download JSON Backup</span>
                  </button>
                </div>

                {/* Reset to Defaults */}
                <div className="p-6 rounded-2xl bg-[#FFF9F9] border border-[#F2D7D7] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FDEAEA] text-[#B52B2B] flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base text-[#9B2A2A] font-normal">
                    Reset to Factory Defaults
                  </h4>
                  <p className="text-xs text-[#8A5656] font-light leading-relaxed">
                    Restore the original 16 authentic Pakistani bridal and party wear catalog dresses and default atelier texts.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowResetModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#9B2A2A] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#802222] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore Defaults</span>
                  </button>
                </div>

                {/* Session Logout Card */}
                <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E7DDD0] space-y-3 md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#E5484D]/10 text-[#A82A2A] flex items-center justify-center">
                        <LogOut className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif text-base text-[#2C1D14] font-normal">
                        Admin Session Control
                      </h4>
                    </div>
                    <p className="text-xs text-[#7D6857] font-light leading-relaxed max-w-xl">
                      Exit the administrator control panel. All your saved dresses and text modifications are safely stored in your browser.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onLogout}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5484D]/15 hover:bg-[#E5484D]/25 text-[#A82A2A] text-xs uppercase tracking-wider font-semibold border border-[#E5484D]/30 transition-colors shrink-0"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out from Admin Panel</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Sticky Bottom Action Bar with Prominent Save Changes */}
        <div className="px-5 sm:px-7 py-3 bg-[#F4EEE6] border-t border-[#E5D9CC] flex items-center justify-between gap-4 shrink-0">
          {activeTab === 'content' && (
            <>
              <div className="flex items-center gap-2 text-xs text-[#634E3E]">
                <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
                <span className="hidden sm:inline">Editing live website copy &amp; atelier branding</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EAE0D2] font-medium transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  id="admin-sticky-save-content-btn"
                  onClick={() => {
                    if (contentFormRef.current?.requestSubmit) {
                      contentFormRef.current.requestSubmit();
                    } else {
                      handleSaveContent(new Event('submit') as unknown as React.FormEvent);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-102"
                >
                  <Check className="w-4 h-4 text-[#D5B895]" />
                  <span>Save Changes</span>
                </button>
              </div>
            </>
          )}

          {activeTab === 'add-product' && (
            <>
              <div className="flex items-center gap-2 text-xs text-[#634E3E]">
                <span className="w-2 h-2 rounded-full bg-[#D5B895]" />
                <span className="hidden sm:inline font-medium">
                  {editingDress ? `Editing: ${editingDress.name}` : 'New Product Creation'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('products');
                    setEditingDress(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EAE0D2] font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  id="admin-sticky-save-product-btn"
                  onClick={() => {
                    if (productFormRef.current?.requestSubmit) {
                      productFormRef.current.requestSubmit();
                    } else {
                      handleSaveProduct(new Event('submit') as unknown as React.FormEvent);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-102"
                >
                  <Check className="w-4 h-4 text-[#D5B895]" />
                  <span>Save Changes</span>
                </button>
              </div>
            </>
          )}

          {(activeTab === 'products' || activeTab === 'settings') && (
            <>
              <div className="text-xs text-[#6E5948]">
                <span>Total Catalog: </span>
                <strong className="text-[#322016] font-semibold">
                  {bridalDresses.length + partyDresses.length} Dresses
                </strong>
                <span className="text-[#9A8471] hidden sm:inline ml-2">
                  ({bridalDresses.length} Bridal · {partyDresses.length} Party Wear)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleStartAddProduct}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#EBE0D2] hover:bg-[#DFD2C2] text-[#362417] text-xs font-semibold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 text-[#866345]" />
                  <span>+ Add Dress</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('content')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#322016] hover:bg-[#483324] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D5B895]" />
                  <span>Edit Texts</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* 4. Quick Image Change Modal Popup */}
        {quickImageTargetDress && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#1F130B]/70 backdrop-blur-xs">
            <div className="w-full max-w-md bg-[#FAF7F2] rounded-2xl border border-[#DECBB8] p-6 shadow-2xl space-y-4 text-[#322016]">
              <div className="flex items-center justify-between border-b border-[#EAE0D3] pb-3">
                <div>
                  <h4 className="font-serif text-lg text-[#2B1B12]">
                    Change Photo: {quickImageTargetDress.name}
                  </h4>
                  <p className="text-[11px] text-[#7C6756]">Upload a new dress photo from your computer</p>
                </div>
                <button
                  type="button"
                  onClick={() => setQuickImageTargetDress(null)}
                  className="p-1 rounded-lg text-[#7C6756] hover:bg-[#EFE5D8]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Preview */}
              <div className="relative aspect-[3/4] max-h-56 mx-auto rounded-xl overflow-hidden bg-[#EAE2D5] border border-[#DECBB8]">
                <img
                  src={quickImageUrl || quickImageTargetDress.image}
                  alt="Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <input
                ref={quickFileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileToDataUrl(e, (url) => setQuickImageUrl(url))}
              />

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => quickFileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#322016] text-[#FAF7F0] text-xs font-semibold uppercase tracking-wider hover:bg-[#483324] transition-colors"
                >
                  <Upload className="w-4 h-4 text-[#D5B895]" />
                  <span>Choose Photo from Device</span>
                </button>

                <div className="pt-1">
                  <span className="block text-[10px] uppercase tracking-wider text-[#8A7564] mb-1">
                    Or Enter Image URL:
                  </span>
                  <input
                    type="text"
                    placeholder="https://..."
                    value={quickImageUrl}
                    onChange={(e) => setQuickImageUrl(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-[#FFFFFF] rounded-lg border border-[#DECBB8] text-[#2A1A11]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#EAE0D3]">
                <button
                  type="button"
                  onClick={() => setQuickImageTargetDress(null)}
                  className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EFE4D4]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleApplyQuickImage}
                  className="px-5 py-2 rounded-xl bg-[#322016] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#483324]"
                >
                  Apply Photo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. In-Modal Confirmation for Deleting a Dress */}
        {dressToDelete && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#1F130B]/70 backdrop-blur-xs">
            <div className="w-full max-w-sm bg-[#FAF7F2] rounded-2xl border border-[#DECBB8] p-6 shadow-2xl space-y-4 text-[#322016]">
              <div className="w-10 h-10 rounded-xl bg-[#FDEAEA] text-[#B52B2B] flex items-center justify-center mx-auto">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="font-serif text-lg text-[#2B1B12]">
                  Delete "{dressToDelete.name}"?
                </h4>
                <p className="text-xs text-[#7C6756]">
                  This dress will be removed from your active catalog. You can always re-add it or restore defaults later.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDressToDelete(null)}
                  className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EFE4D4] font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDeleteDress}
                  className="px-5 py-2 rounded-xl bg-[#9B2A2A] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#802222] transition-colors"
                >
                  Delete Dress
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6. In-Modal Confirmation for Resetting to Defaults */}
        {showResetModal && (
          <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#1F130B]/70 backdrop-blur-xs">
            <div className="w-full max-w-sm bg-[#FAF7F2] rounded-2xl border border-[#DECBB8] p-6 shadow-2xl space-y-4 text-[#322016]">
              <div className="w-10 h-10 rounded-xl bg-[#FDEAEA] text-[#B52B2B] flex items-center justify-center mx-auto">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="font-serif text-lg text-[#9B2A2A]">
                  Reset to Factory Defaults?
                </h4>
                <p className="text-xs text-[#7C6756]">
                  This will restore all original 16 bridal and party wear dresses and reset atelier copy to defaults.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowResetModal(false)}
                  className="px-4 py-2 rounded-xl text-xs text-[#6C5746] hover:bg-[#EFE4D4] font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmResetToDefaults}
                  className="px-5 py-2 rounded-xl bg-[#9B2A2A] text-[#FAF7F0] text-xs uppercase tracking-wider font-semibold hover:bg-[#802222] transition-colors"
                >
                  Yes, Reset All
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
