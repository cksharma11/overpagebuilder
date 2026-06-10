import React, { useEffect } from 'react';
import AcademicTemplate from '../Templates/AcademicTemplate';
import ModernTemplate from '../Templates/ModernTemplate';
import MinimalistTemplate from '../Templates/MinimalistTemplate';
import CreativeTemplate from '../Templates/CreativeTemplate';

// 10 New Templates
import HarvardTemplate from '../Templates/HarvardTemplate';
import SlateTemplate from '../Templates/SlateTemplate';
import TimelineTemplate from '../Templates/TimelineTemplate';
import TechCompactTemplate from '../Templates/TechCompactTemplate';
import AccentHeaderTemplate from '../Templates/AccentHeaderTemplate';
import LeftNarrativeTemplate from '../Templates/LeftNarrativeTemplate';
import SerifTimelineTemplate from '../Templates/SerifTimelineTemplate';
import DoubleColumnTemplate from '../Templates/DoubleColumnTemplate';
import WarmMinimalTemplate from '../Templates/WarmMinimalTemplate';
import EliteCorporateTemplate from '../Templates/EliteCorporateTemplate';

const ResumePreview = React.forwardRef(({ data }, ref) => {
  const { settings = {} } = data;

  useEffect(() => {
    const adjustPageBreaks = () => {
      const container = document.getElementById('printable-resume-sheet');
      if (!container) return;

      // 1. Reset all custom margins first so we calculate from original positions
      const sections = container.querySelectorAll('.section');
      sections.forEach(sec => {
        sec.style.marginTop = '0px';
      });
      const items = container.querySelectorAll('.item-row');
      items.forEach(item => {
        item.style.marginTop = '0px';
      });
      const skillGroups = container.querySelectorAll('.skill-group');
      skillGroups.forEach(sg => {
        sg.style.marginTop = '0px';
      });

      // Measure A4 height in pixels
      const tempDivHeight = document.createElement('div');
      tempDivHeight.style.height = '11.69in';
      tempDivHeight.style.position = 'absolute';
      tempDivHeight.style.visibility = 'hidden';
      document.body.appendChild(tempDivHeight);
      const pageHeight = tempDivHeight.offsetHeight;
      document.body.removeChild(tempDivHeight);

      // Measure margin size in pixels based on current settings
      let marginVal = '0.6in';
      let bottomMarginVal = '0.4in';
      let subsequentTopMarginVal = '0.75in';
      if (settings.margins) {
        switch (settings.margins) {
          case 'compact':
            marginVal = '0.4in';
            bottomMarginVal = '0.3in';
            subsequentTopMarginVal = '0.55in';
            break;
          case 'relaxed':
            marginVal = '0.8in';
            bottomMarginVal = '0.5in';
            subsequentTopMarginVal = '1.0in';
            break;
          case 'normal':
          default:
            marginVal = '0.6in';
            bottomMarginVal = '0.4in';
            subsequentTopMarginVal = '0.75in';
            break;
        }
      }

      const tempDivMargin = document.createElement('div');
      tempDivMargin.style.height = marginVal;
      tempDivMargin.style.position = 'absolute';
      tempDivMargin.style.visibility = 'hidden';
      document.body.appendChild(tempDivMargin);
      const marginPx = tempDivMargin.offsetHeight;
      document.body.removeChild(tempDivMargin);

      const tempDivBottomMargin = document.createElement('div');
      tempDivBottomMargin.style.height = bottomMarginVal;
      tempDivBottomMargin.style.position = 'absolute';
      tempDivBottomMargin.style.visibility = 'hidden';
      document.body.appendChild(tempDivBottomMargin);
      const bottomMarginPx = tempDivBottomMargin.offsetHeight;
      document.body.removeChild(tempDivBottomMargin);

      const tempDivSubsequentMargin = document.createElement('div');
      tempDivSubsequentMargin.style.height = subsequentTopMarginVal;
      tempDivSubsequentMargin.style.position = 'absolute';
      tempDivSubsequentMargin.style.visibility = 'hidden';
      document.body.appendChild(tempDivSubsequentMargin);
      const subsequentTopMarginPx = tempDivSubsequentMargin.offsetHeight;
      document.body.removeChild(tempDivSubsequentMargin);

      if (!pageHeight || !marginPx || !bottomMarginPx || !subsequentTopMarginPx) return;

      // 2. Loop through all sections, items, and skill groups in order of DOM flow
      const flowElements = container.querySelectorAll('.section, .item-row, .skill-group');
      flowElements.forEach(el => {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        
        const pageNum = Math.floor(top / pageHeight);
        const currentTopMarginPx = pageNum === 0 ? marginPx : subsequentTopMarginPx;
        const pageContentStart = pageNum * pageHeight + currentTopMarginPx;
        const pageContentEnd = (pageNum + 1) * pageHeight - bottomMarginPx;
        const maxContentHeight = pageHeight - currentTopMarginPx - bottomMarginPx;
        
        // Push the element to the next page if:
        // 1. It starts inside the top margin of the current page (for page 2 onwards)
        // 2. OR it naturally starts after the content end of the current page (in the bottom margin or gap area)
        // 3. OR it starts before the content end but overflows past it (and fits in the next page)
        const startsInTopMargin = (pageNum >= 1 && top < pageContentStart);
        const startsInMargin = (top > pageContentEnd);
        const overflowsPage = (top <= pageContentEnd && (top + height) > pageContentEnd && height < maxContentHeight);
        
        // Special check: push a section header if it is orphaned near the page bottom
        const isSectionHeader = el.classList.contains('section');
        const isOrphanSectionHeader = isSectionHeader && (top < pageContentEnd && pageContentEnd - top < (80 + currentTopMarginPx));
        
        if (startsInTopMargin) {
          const shift = pageContentStart - top;
          el.style.marginTop = `${shift}px`;
        } else if (startsInMargin || overflowsPage || isOrphanSectionHeader) {
          const nextPageStart = (pageNum + 1) * pageHeight + subsequentTopMarginPx;
          const shift = nextPageStart - top;
          el.style.marginTop = `${shift}px`;
        }
      });
    };

    // Run after a short delay to ensure DOM has fully rendered
    const timer = setTimeout(adjustPageBreaks, 150);
    return () => clearTimeout(timer);
  }, [data, settings.margins]);

  const renderSelectedTemplate = () => {
    switch (settings.template) {
      case 'academic':
        return <AcademicTemplate data={data} />;
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'minimalist':
        return <MinimalistTemplate data={data} />;
      case 'creative':
        return <CreativeTemplate data={data} />;
        
      // 10 new cases
      case 'harvard':
        return <HarvardTemplate data={data} />;
      case 'slate':
        return <SlateTemplate data={data} />;
      case 'timeline':
        return <TimelineTemplate data={data} />;
      case 'tech':
        return <TechCompactTemplate data={data} />;
      case 'accent':
        return <AccentHeaderTemplate data={data} />;
      case 'narrative':
        return <LeftNarrativeTemplate data={data} />;
      case 'serif_timeline':
        return <SerifTimelineTemplate data={data} />;
      case 'double':
        return <DoubleColumnTemplate data={data} />;
      case 'warm':
        return <WarmMinimalTemplate data={data} />;
      case 'elite':
        return <EliteCorporateTemplate data={data} />;
        
      default:
        return <AcademicTemplate data={data} />;
    }
  };

  // Determine typeface family to inject inline
  const getFontFamily = () => {
    switch (settings.fontFamily) {
      case 'sans':
        return 'var(--font-inter)';
      case 'roboto':
        return 'var(--font-roboto)';
      case 'montserrat':
        return 'var(--font-montserrat)';
      case 'ibm_plex':
        return 'var(--font-ibm-plex)';
      case 'serif':
        return 'var(--font-eb-garamond)';
      case 'merriweather':
        return 'var(--font-merriweather)';
      case 'libre_baskerville':
        return 'var(--font-libre-baskerville)';
      case 'playfair':
        return 'var(--font-playfair)';
      case 'mono':
        return 'var(--font-jetbrains-mono)';
      case 'default':
      default:
        return 'inherit';
    }
  };

  const paperClasses = [
    'resume-paper',
    `margin-${settings.margins || 'normal'}`,
    `size-${settings.fontSize || 'medium'}`,
  ].join(' ');

  const fontVal = getFontFamily();
  const inlineStyles = {
    '--theme-color': settings.themeColor || '#0f172a',
    ...(fontVal !== 'inherit' ? {
      fontFamily: fontVal,
      '--resume-font-serif': fontVal,
      '--resume-font-sans': fontVal,
      '--resume-font-mono': fontVal
    } : {})
  };

  const getMarginValue = () => {
    switch (settings.margins) {
      case 'compact':
        return '0.4in';
      case 'relaxed':
        return '0.8in';
      case 'normal':
      default:
        return '0.6in';
    }
  };

  const marginVal = getMarginValue();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page {
            size: A4 portrait;
            margin: 0 !important;
          }
        }
      ` }} />
      <div 
        ref={ref}
        id="printable-resume-sheet"
        className={paperClasses}
        style={inlineStyles}
      >
        {renderSelectedTemplate()}
        {/* Visual page break guides (hidden in print via CSS and ignored by PDF downloader) */}
        <div className="page-break-guide-1" data-html2canvas-ignore="true">Page 1 • Page 2</div>
        <div className="page-break-guide-2" data-html2canvas-ignore="true">Page 2 • Page 3</div>
      </div>
    </>
  );
});

export default ResumePreview;
