document.addEventListener("DOMContentLoaded", () => {
    
    // ============================================
    // 1. DATA CONFIGURATION (Manual Array is safest)
    // ============================================
    
    // รายชื่อไฟล์ในโฟลเดอร์ img/logo/partner/
    const partnerFiles = [
        "unnamed(5).png", "unnamed(6).png", "unnamed(7).jpg", 
        "unnamed(8).png", "unnamed(9).jpg", "unnamed(10).jpg", 
        "unnamed(11).jpg"
    ];

    // รายชื่อไฟล์ในโฟลเดอร์ img/logo/sponsor/
    const sponsorFiles = [
        "unnamed(12).jpg", "unnamed(13).jpg", "unnamed(14).png",
        "unnamed(15).jpg", "unnamed(16).jpg", "unnamed(17).png",
        "unnamed(18).jpg", "unnamed(19).png", "unnamed(20).png",
        "unnamed(21).jpg", "unnamed(22).png"
    ];

    // ============================================
    // 2. REUSABLE FUNCTION: โหลดรูปเข้า Grid
    // ============================================
    function loadLogos(containerId, folderPath, fileList) {
        const container = document.getElementById(containerId);
        if (!container) return; // ถ้าหา ID ไม่เจอให้ข้าม

        fileList.forEach(filename => {
            // สร้าง Wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'logo-item';

            // สร้าง Image
            const img = document.createElement('img');
            img.src = `${folderPath}${filename}`;
            img.alt = "Partner/Sponsor Logo";
            img.className = 'logo-img';
            img.loading = "lazy";

            // Error Handling: ซ่อนถ้ารูปเสีย
            img.onerror = () => wrapper.style.display = 'none';

            wrapper.appendChild(img);
            container.appendChild(wrapper);
        });
    }

    // ============================================
    // 3. EXECUTE
    // ============================================
    
    // โหลด Partners
    loadLogos('partnerGrid', 'img/logo/partner/', partnerFiles);
    
    // โหลด Sponsors
    loadLogos('sponsorGrid', 'img/logo/sponsor/', sponsorFiles);

});