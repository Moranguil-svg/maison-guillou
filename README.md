# 🍞 Maison Guillou - Site Web Boulangerie

Bienvenue sur le site web de **Maison Guillou**, votre boulangerie artisanale!

## 📋 À propos

Ce site web a été créé pour présenter les produits et services de Maison Guillou:
- 🥖 **Pains artisanaux** - Baguettes, pain complet, pain aux céréales, ciabatta
- 🧁 **Pâtisseries** - Croissants, pain au chocolat, tartes, éclairs
- 🥪 **Snacks** - Sandwichs, quiches, fougasses, salés

## 🎨 Structure du Site

### Pages et Sections
1. **Accueil** - Section héro avec call-to-action
2. **Nos Produits** - Présentation des 3 catégories avec 4 produits chacune
3. **À Propos** - Historique et statistiques de la boulangerie
4. **Contact** - Formulaire de commande et coordonnées
5. **Footer** - Liens et réseaux sociaux

## 🎨 Couleurs et Design

**Palette de couleurs:**
- 🟡 Doré principal: `#C4A350`
- 🟤 Brun: `#8B7355`
- 🟤 Beige: `#E8D5B7`
- ⚫ Gris foncé: `#2C2C2C`
- ⚪ Blanc: `#FFFFFF`

**Vous pouvez modifier ces couleurs facilement** en éditant les variables CSS au début du fichier `styles.css`.

## 🛠️ Fichiers du Projet

```
maison-guillou/
├── index.html          # Structure du site
├── styles.css          # Styles et design
├── script.js           # Interactions et animations
├── logo.svg            # Logo de la boulangerie
└── README.md           # Ce fichier
```

## ✏️ Comment Modifier le Contenu

### 1. Informations de la Boulangerie
Dans `index.html`, recherchez et modifiez:
- **Nom**: Changez "Maison Guillou" où nécessaire
- **Adresse**: Section "Contactez-nous" > Adresse
- **Téléphone**: 123 Rue de la Boulangerie, 75001 Paris
- **Email**: contact@maisongui​llou.fr
- **Horaires**: Lun-Ven: 6h30-20h, Sam-Dim: 7h-19h

### 2. Ajouter/Modifier des Produits
Chaque produit est une `<div class="produit-card">` dans `index.html`:

```html
<div class="produit-card">
    <div class="produit-image pain-1"></div>
    <h4>Nom du produit</h4>
    <p>Description du produit</p>
    <span class="prix">Prix €</span>
</div>
```

### 3. Changer les Couleurs
Éditez `styles.css` (les 10 premières lignes):

```css
:root {
    --color-primary: #C4A350;        /* Couleur principale */
    --color-secondary: #8B7355;      /* Couleur secondaire */
    --color-accent: #E8D5B7;         /* Couleur accent */
    /* ... etc */
}
```

### 4. Ajouter une Image Logo
Remplacez `logo.svg` par votre propre logo. Assurez-vous qu'il soit nommé `logo.svg`.

## 📱 Responsive

Le site est entièrement responsive et fonctionne sur:
- ✅ Ordinateur de bureau (1200px+)
- ✅ Tablette (768px - 1199px)
- ✅ Mobile (moins de 768px)

## 🔗 Liens à Ajouter

N'oubliez pas de mettre à jour ces liens avec vos propres données:
- Réseaux sociaux (Facebook, Instagram, Twitter) dans le footer
- Lien Google Maps pour la localisation
- Email de contact
- Numéro de téléphone

## 📧 Formulaire de Contact

Le formulaire utilise la fonction `mailto:` pour envoyer les demandes de commande. L'email est pré-rempli dans le code (ligne contact dans `index.html`).

## 🚀 Déploiement

Pour mettre votre site en ligne, vous pouvez utiliser:
- **GitHub Pages** (gratuit et facile)
- **Netlify** (gratuit et simple)
- **Vercel** (gratuit et performant)
- **Votre hébergeur web personnel**

## 💡 Astuces

- Utilisez des images de qualité pour les produits
- Mettez à jour régulièrement les horaires
- Incluez les horaires spéciaux (jours fériés, fermeture annuelle)
- Ajoutez des avis clients pour plus de confiance
- Pensez à ajouter un lien WhatsApp ou Telegram

## 📞 Support

Pour modifier ou améliorer le site, contactez votre développeur ou consultez la documentation HTML/CSS.

---

**Fait avec ❤️ pour Maison Guillou**
