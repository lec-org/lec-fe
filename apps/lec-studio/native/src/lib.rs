// use cocoa::{appkit::NSWindowStyleMask, base::id, foundation::NSAutoreleasePool};
// use neon::prelude::*;
// fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
//     Ok(cx.string("hello node"))
// }
//
// fn set_arcylic_effect(window: id) {
//     unsafe {
//         let ns_widnow: id = window;
//         ns_widnow.setStyleMask_(NSWindowStyleMask)
//     }
// }
//
// #[neon::main]
// fn main(mut cx: ModuleContext) -> NeonResult<()> {
//     cx.export_function("hello", hello)?;
//     cx.export_function("set_arcylic_effect", set_arcylic_effect)?;
//     Ok(())
// }
