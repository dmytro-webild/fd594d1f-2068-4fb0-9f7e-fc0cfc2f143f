"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import { CheckCircle, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Overview", id: "overview" },
              { name: "Restaurants", id: "restaurants" },
              { name: "Security", id: "security" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="AdminPanel"
          />
        </div>

        <div id="overview" data-section="overview">
          <HeroBillboardTestimonial
            background={{ variant: "gradient-bars" }}
            title="Super Admin Control Center"
            description="Oversee operations, revoke platform access, and manage subscription statuses for all registered partner restaurants."
            testimonials={[
              { name: "System Admin", handle: "@admin", testimonial: "Platform stability remains at 99.9% with the current management protocol.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg", imageAlt: "saas dashboard background dark" },
              { name: "Database Lead", handle: "@db", testimonial: "Soft-delete implementation has reduced record loss significantly.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/restaurant-logo-food-business-template-branding-design-vector_53876-154123.jpg", imageAlt: "saas dashboard background dark" },
              { name: "Security Ops", handle: "@sec", testimonial: "Revoke access logs are now fully automated and transparent.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/birthday-cake-icon-happy-birthday-cake-birthday-celebration-with-candles_460848-11269.jpg", imageAlt: "saas dashboard background dark" },
              { name: "Support Manager", handle: "@support", testimonial: "Managing subscriptions is now 3x faster with the new dashboard.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/hot-smoked-fire-logo-business-branding-template-barbeque-designs-inspiration-isolated-white-background_384344-1442.jpg", imageAlt: "saas dashboard background dark" },
              { name: "Product Owner", handle: "@product", testimonial: "The new analytics view gives us deep insights into growth.", rating: 5, imageSrc: "http://img.b2bpic.net/free-vector/20-food-solid-glyph-icon-presentation_1142-22254.jpg", imageAlt: "saas dashboard background dark" }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/closeup-african-american-entrepreneur-analyzing-company-profit_482257-20207.jpg"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/close-up-accounting-sales-statistics-computer-display_482257-122982.jpg", alt: "System Admin" },
              { src: "http://img.b2bpic.net/free-photo/determined-ceo-works-office-analyzing-infographics-setting-business-goals_482257-123120.jpg", alt: "Database Lead" },
              { src: "http://img.b2bpic.net/free-photo/high-tech-office-ready-stock-trading_482257-121465.jpg", alt: "Security Ops" },
              { src: "http://img.b2bpic.net/free-photo/employee-examining-company-performance_482257-121856.jpg", alt: "Support Manager" },
              { src: "http://img.b2bpic.net/free-vector/hand-drawn-chef-job-poster-template_23-2149946958.jpg", alt: "Product Owner" }
            ]}
            marqueeItems={[
              { type: "text", text: "Real-time Monitoring" },
              { type: "text", text: "Access Revocation" },
              { type: "text", text: "Subscription Audits" },
              { type: "text", text: "Infrastructure Security" },
              { type: "text", text: "Database Maintenance" }
            ]}
          />
        </div>

        <div id="restaurants" data-section="restaurants">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            products={[
              { id: "res1", brand: "Active", name: "Grand Bistro", price: "$1200", rating: 5, reviewCount: "120", imageSrc: "http://img.b2bpic.net/free-vector/restaurant-logo-food-business-template-branding-design-vector_53876-154123.jpg" },
              { id: "res2", brand: "Active", name: "Burger Joint", price: "$800", rating: 4, reviewCount: "89", imageSrc: "http://img.b2bpic.net/free-photo/birthday-cake-icon-happy-birthday-cake-birthday-celebration-with-candles_460848-11269.jpg" },
              { id: "res3", brand: "Suspended", name: "Spice Route", price: "$0", rating: 0, reviewCount: "0", imageSrc: "http://img.b2bpic.net/free-vector/hot-smoked-fire-logo-business-branding-template-barbeque-designs-inspiration-isolated-white-background_384344-1442.jpg" },
              { id: "res4", brand: "Active", name: "Coffee House", price: "$450", rating: 5, reviewCount: "300", imageSrc: "http://img.b2bpic.net/free-vector/20-food-solid-glyph-icon-presentation_1142-22254.jpg" },
              { id: "res5", brand: "Active", name: "Pizza Corner", price: "$900", rating: 4, reviewCount: "150", imageSrc: "http://img.b2bpic.net/free-vector/bakery-text-banner-poster-design_1308-124862.jpg" },
              { id: "res6", brand: "Active", name: "Sushi Bar", price: "$1500", rating: 5, reviewCount: "400", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6ksood" }
            ]}
            title="Registered Restaurants"
            description="Manage individual restaurant access and status."
          />
        </div>

        <div id="analytics" data-section="analytics">
          <MetricCardThree
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", icon: CheckCircle, title: "Active Outlets", value: "1,240" },
              { id: "m2", icon: Shield, title: "Suspended Access", value: "12" },
              { id: "m3", icon: Zap, title: "Avg Daily Orders", value: "45.2k" }
            ]}
            title="Platform Health Stats"
            description="Key performance indicators across all nodes."
          />
        </div>

        <div id="security" data-section="security">
          <FaqSplitMedia
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "f1", title: "How to soft-delete a restaurant?", content: "Set the `isDeleted` flag to true in the owners collection. This keeps record integrity while disabling QR access." },
              { id: "f2", title: "Can I perform a hard delete?", content: "Yes, but it is not recommended. Use cascading delete functions to remove linked menu items if choosing hard delete." },
              { id: "f3", title: "What happens to the QR code?", content: "Once the status is marked as 'suspended', the QR code will automatically trigger a 403 Forbidden error." }
            ]}
            mediaAnimation="slide-up"
            title="Security Guidelines"
            description="Protocols for restaurant removal and access revocation."
            faqsAnimation="blur-reveal"
            imageSrc="http://img.b2bpic.net/free-vector/food-infographic-template_1284-48296.jpg"
          />
        </div>

        <div id="logs" data-section="logs">
          <BlogCardTwo
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            title="Subscription Logs"
            description="Audit trail of recent admin actions."
            blogs={[
              { id: "b1", category: "Audit", title: "Access Revoked: Spice Route", excerpt: "User requested account suspension due to subscription expiration.", imageSrc: "http://img.b2bpic.net/free-vector/food-25-line-filled-icon-pack-including-food-water-vegetable-waffle-food_1142-25116.jpg", authorName: "Admin", authorAvatar: "http://img.b2bpic.net/free-photo/delicious-cuisine-taste-food-concept_53876-120881.jpg", date: "Oct 24, 2023" },
              { id: "b2", category: "Subscription", title: "Premium Tier Activated: Grand Bistro", excerpt: "Auto-renewal successful for annual billing cycle.", imageSrc: "http://img.b2bpic.net/free-vector/bakery-fresh-delicious-text-banner-poster-design_1308-124002.jpg", authorName: "System", authorAvatar: "http://img.b2bpic.net/free-vector/bakery-fresh-delicious-text-banner-poster-design_1308-128241.jpg", date: "Oct 22, 2023" },
              { id: "b3", category: "Security", title: "Cascading Cleanup Successful", excerpt: "Menu items for deleted outlet #982 cleared from DB.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=umxvcp", authorName: "System", authorAvatar: "http://img.b2bpic.net/free-vector/flat-design-fire-label-badge-collection_23-2147728171.jpg", date: "Oct 20, 2023" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="SUPPORT"
            title="System Support"
            description="Need technical assistance or platform oversight?"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="AdminPanel"
            columns={[
              { title: "Management", items: [{ label: "Restaurants", href: "#restaurants" }, { label: "Security", href: "#security" }] },
              { title: "Documentation", items: [{ label: "API Docs", href: "#" }, { label: "Schema Rules", href: "#" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}