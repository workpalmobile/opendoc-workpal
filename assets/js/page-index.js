(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-workpal/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["something","this is a subtitle",["README.md","sample.md"]]
            },
            
        {
                name: "index.md",
                title: "Test Document",
                url: "/opendoc-workpal/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["something","this is a subtitle",["README.md","sample.md"]]
            },
            
        {
                name: "index.md",
                title: "This is a Document Title",
                url: "/opendoc-workpal/Document%201/",
                escapedPath: "Document%201/index.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1","hello",["page1.md","page2.md"]]
            },
            
        {
                name: "index.md",
                title: "Test Document",
                url: "/opendoc-workpal/AA%20Document%202/",
                escapedPath: "AA%20Document%202/index.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["This is the second document","something 2",["page1.md","page2.md"]]
            },
            
        {
                name: "sample.md",
                title: "Sample page",
                url: "/opendoc-workpal/sample.html",
                escapedPath: "sample.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["something","this is a subtitle",["README.md","sample.md"]]
            },
            
        
        
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/opendoc-workpal/AA%20Document%202/page1.html",
                escapedPath: "AA%20Document%202/page1.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["This is the second document","something 2",["page1.md","page2.md"]]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/opendoc-workpal/AA%20Document%202/page2.html",
                escapedPath: "AA%20Document%202/page2.md",
                dir: "/AA%20Document%202/",
                tocId: "toc_/aa%20document%202/",
                documentInfo: ["This is the second document","something 2",["page1.md","page2.md"]]
            },
            
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/opendoc-workpal/Document%201/page1.html",
                escapedPath: "Document%201/page1.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1","hello",["page1.md","page2.md"]]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/opendoc-workpal/Document%201/page2.html",
                escapedPath: "Document%201/page2.md",
                dir: "/Document%201/",
                tocId: "toc_/document%201/",
                documentInfo: ["Document 1","hello",["page1.md","page2.md"]]
            },
            
        {
                name: "page1.md",
                title: "Prospiciunt morti 1",
                url: "/opendoc-workpal/page1.html",
                escapedPath: "page1.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["something","this is a subtitle",["README.md","sample.md"]]
            },
            
        {
                name: "page2.md",
                title: "Prospiciunt morti 2",
                url: "/opendoc-workpal/page2.html",
                escapedPath: "page2.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["something","this is a subtitle",["README.md","sample.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()