exports.input = __dirname;

var path = require( 'path' );
exports.output = path.resolve( __dirname, 'output' );

var FontProcessor = require('edp-build-fontmin');

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var lessProcessor = new LessCompiler();
    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler();
    var jsProcessor = new JsCompressor();
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();
    var fontProcessor = new FontProcessor({
        files: [ '*.ttf' ],                     // 字体文件
        entryFiles: [ '*.html' ],               // 引用字体的网页，用来扫描所需字型
        text: '他夏了夏天',                      // 人肉配置所需字型
        chineseOnly: true,                      // 只取中文字型，忽略 数字、英文、标点
    });

    return {
        'default': [ lessProcessor, moduleProcessor, pathMapperProcessor, fontProcessor ],
        'release': [
            lessProcessor, cssProcessor, moduleProcessor,
            jsProcessor, pathMapperProcessor, addCopyright, fontProcessor
        ]
    };
};

exports.exclude = [
    'node_modules',
    'screenshot',
    'README.md',
    'package.json',
    'tool',
    'doc',
    'test',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp'
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

