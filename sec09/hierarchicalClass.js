exports.ContainerClass = ContainerClass;
exports.ObservedContainerClass = ObservedContainerClass;
exports.HoleClass = HoleClass;
exports.CASClass = CASClass;
exports.TableBaseClass = TableBaseClass;

function ContainerClass () {};
function ObservedContainerClass () {};
function HoleClass () {};
function CASClass () {};
function TableBaseClass () {};

ObservedContainerClass.prototype = new ContainerClass();
HoleClass.prototype = new ObservedContainerClass();
CASClass.prototype = new HoleClass();
TableBaseClass.prototype = new HoleClass();

