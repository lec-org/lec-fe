use neon::prelude::*;
use cocoa::{appkit::NSWindow, base::{id, nil}};
fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

fn set_arcylic_effect(window: id) {
  unsafe {
    let pool = NsAtuoreleasePool::new(nil)
    let ns_widnow: id = window
    // ns_widnow.setStyleMask_(NsfullSizeContentViewWindowMask | NsWindowSTyleMakskll::NS)
  }
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("hello", hello)?;
    Ok(())
}
