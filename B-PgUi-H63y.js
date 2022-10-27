if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("PolarisDirectInboxGeneralNullStateView.react",["PolarisAssetManagerGlyphMapping","PolarisDirectStrings","PolarisGenericNullStateView.react","PolarisIGCoreIcon","PolarisRoutes","browserHistory","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=function(){d("browserHistory").browserHistory.push(d("PolarisRoutes").PUSH_PREFERENCES_PATH)};return h.jsx(c("PolarisGenericNullStateView.react"),{body:d("PolarisDirectStrings").NOTIFICATIONS_ARE_OFF,header:d("PolarisDirectStrings").YOUR_GENERAL_MESSAGES,icon:h.jsx(c("PolarisIGCoreIcon"),{alt:d("PolarisDirectStrings").DIRECT_ALT_TEXT,icon:d("PolarisAssetManagerGlyphMapping").ICONS.DIRECT_OUTLINE_96}),primaryAction:a,primaryActionName:d("PolarisDirectStrings").GO_TO_NOTIFICATIONS})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIGCoreCircleDirectPanoOutlineIcon",["PolarisIGCoreSVGIcon","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("PolarisIGCoreSVGIcon"),babelHelpers["extends"]({},a,{viewBox:"0 0 96 96",children:[h.jsx("circle",{cx:"48",cy:"48",fill:"none",r:"47",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),h.jsx("line",{fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2",x1:"69.286",x2:"41.447",y1:"33.21",y2:"48.804"}),h.jsx("polygon",{fill:"none",points:"47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("PolarisDirectInboxNullStateView.react",["PolarisDirectNewThread.react","PolarisDirectStrings","PolarisGenericNullStateView.react","PolarisIGCoreCircleDirectPanoOutlineIcon","PolarisRoutes","PolarisUA","browserHistory","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useState;function a(a){a=i(!1);var b=a[0],e=a[1];a=function(){d("PolarisUA").isDesktop()?e(!0):d("browserHistory").browserHistory.push(d("PolarisRoutes").DIRECT_NEW)};var f=function(){e(!1)};return h.jsxs(h.Fragment,{children:[h.jsx(c("PolarisGenericNullStateView.react"),{body:d("PolarisDirectStrings").CHOOSE_EXISTING_MESSAGE,header:d("PolarisDirectStrings").NO_MESSAGES_SELECTED,icon:h.jsx(c("PolarisIGCoreCircleDirectPanoOutlineIcon"),{alt:d("PolarisDirectStrings").DIRECT_ALT_TEXT,size:96}),primaryAction:a,primaryActionName:d("PolarisDirectStrings").SEND_MESSAGE_STRING_V2}),b&&h.jsx(c("PolarisDirectNewThread.react"),{onDismiss:f})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectPendingRequestsPaginatedList.react",["PolarisDirectActions","PolarisDirectInboxListItem.react","PolarisErrorBoundary.react","PolarisIGCoreBox","PolarisIGCoreListItemPlaceholder","PolarisIGCoreSpinner","PolarisIGVirtualList.react","PolarisUA","PolarisdirectSelectors","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo,k=72,l=12,m=3,n=10;function a(a){var b=a.activeThreadId;a=d("react-redux-wwwig").useSelector(function(a){var b=d("PolarisdirectSelectors").getPendingThreadIds(a),c=a.direct.isLoadingPendingThreads;return{pendingThreadIds:b,isLoadingPendingThreads:c,isEmptyState:!c&&b.length===0,pagination:d("PolarisdirectSelectors").getPendingRequestsPagination(a)}},d("react-redux-wwwig").shallowEqual);var e=a.isEmptyState,f=a.isLoadingPendingThreads,g=a.pagination,o=a.pendingThreadIds,p=d("react-redux-wwwig").useDispatch(),q=i(function(){return p(d("PolarisDirectActions").refreshPendingInbox())},[p]),r=typeof (g==null?void 0:g.hasOlder)!=="boolean"&&!(g==null?void 0:g.oldestCursor);a=i(function(){!f&&(g==null?void 0:g.hasOlder)===!0&&q()},[q,f,g]);var s=j(function(){if(r)return d("PolarisUA").isDesktop()?d("PolarisDirectActions").DIRECT_INBOX_SNAPSHOT_LIMIT:n;return e?m:o.length},[r,o,e]),t=i(function(a){var g=a.index;a.isVisible;if(e)return null;if(r)return h.jsx(c("PolarisIGCoreListItemPlaceholder"),{fullWidth:d("PolarisUA").isDesktop(),size:"large"},g);a=g===o.length-1;a=f&&!r&&a?h.jsx(c("PolarisIGCoreBox"),{alignItems:"center",height:k,justifyContent:"center",paddingY:2,children:h.jsx(c("PolarisIGCoreSpinner"),{size:"medium"})},"spinner"):null;g=o[g];return h.jsxs(c("PolarisErrorBoundary.react"),{errorRenderer:function(a){return null},children:[h.jsx(c("PolarisDirectInboxListItem.react"),{isActiveThread:g===b,threadId:g}),a]},g)},[e,r,o,b,f]);return h.jsx(c("PolarisIGVirtualList.react"),{containerSize:"100%",direction:"vertical",estimatedItemSize:k,itemCount:s,onScroll:a,overscanCount:l,renderer:t})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectPendingRequests.react",["cx","IGCoreDialog","PolarisConfig","PolarisDirectActions","PolarisDirectPageMetadata.react","PolarisDirectPendingRequestsPaginatedList.react","PolarisDirectStrings","PolarisGenericDesktopHeader.react","PolarisGenericMobileHeader.react","PolarisGenericNavBackButton.react","PolarisGenericStrings","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreText","PolarisRoutes","PolarisStyleConstants","PolarisTargetedPortal.react","PolarisUA","PolarisdirectSelectors","nullthrows","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState,k="DirectRequestPage";function a(a){var b=a.activeThreadId;a.isLoadingPendingThreads;var e=a.pendingThreadIds,f=d("react-redux-wwwig").useDispatch();a=j(!1);var g=a[0],h=a[1];function l(a){f(d("PolarisDirectActions").declineAllPendingThreads(a))}function m(){h(!0)}a=d("PolarisUA").isBrowserWithFlexboxRelativeHeightIssue();var n={leftActions:i.jsx(c("PolarisGenericNavBackButton.react"),{href:d("PolarisRoutes").DIRECT_INBOX}),title:d("PolarisDirectStrings").MESSAGE_REQUESTS_STRING},o=i.jsx("div",{className:"_aa5d",children:i.jsx(c("PolarisIGCoreBox"),{color:"ig-secondary-background",paddingX:4,paddingY:5,children:i.jsx(c("PolarisIGCoreText").Body2,{color:"ig-secondary-text",children:d("PolarisDirectStrings").PENDING_REQUESTS_HEADER_V2})})});m=i.jsx("div",{className:"_aa5e",children:i.jsx(c("PolarisIGCoreBox"),{paddingY:4,children:i.jsx(c("PolarisIGCoreButton"),{borderless:!0,color:"ig-error-or-destructive",disabled:e.length===0,large:!0,onClick:m,children:d("PolarisDirectStrings").DELETE_ALL})})});var p=c("PolarisStyleConstants")["mobile-nav-height"],q=p.units;p=p.value;p=""+p+q;return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisDirectPageMetadata.react"),{id:k,title:d("PolarisDirectStrings").MESSAGE_REQUESTS_STRING}),d("PolarisUA").isDesktop()?i.jsx(c("PolarisGenericDesktopHeader.react"),babelHelpers["extends"]({},n)):i.jsx(d("PolarisTargetedPortal.react").PortalTo,{targetId:"direct-mobile-header",children:i.jsx(c("PolarisGenericMobileHeader.react"),babelHelpers["extends"]({},n))}),o,i.jsx(c("PolarisIGCoreBox"),{flex:"shrink",height:a?"calc(100% - "+p+")":"100%",overflow:"hidden",position:a?"absolute":void 0,width:a?"100%":void 0,children:i.jsx(c("PolarisDirectPendingRequestsPaginatedList.react"),{activeThreadId:b})}),m,g&&i.jsxs(d("IGCoreDialog").IGCoreDialog,{body:d("PolarisDirectStrings").deleteAllMessages(e.length),onModalClose:function(){return h(!1)},title:d("PolarisDirectStrings").DELETE_ALL_TITLE,children:[i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:function(){return l(e)},children:d("PolarisDirectStrings").DELETE_ALL}),i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:function(){return h(!1)},children:d("PolarisGenericStrings").CANCEL_TEXT})]})]})}function b(a){var b=a.direct;b=b.isLoadingPendingThreads;return{isLoadingPendingThreads:b,pendingThreadIds:d("PolarisdirectSelectors").getPendingThreadIds(a),viewer:d("PolarisdirectSelectors").getDirectUserById(a,c("nullthrows")(d("PolarisConfig").getViewerId()))}}e=d("react-redux-wwwig").connect(b)(a);g["default"]=e}),98);
__d("PolarisDirectVerifiedUserCallingNotEnabledModal.react",["IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActions","PolarisDirectStrings","PolarisRoutes","browserHistory","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){var a=d("react-redux-wwwig").useDispatch(),b=function(){a(d("PolarisDirectActions").closeVerifiedUserCallingNotEnabledModal())},e=function(){b(),d("browserHistory").browserHistory.push(d("PolarisRoutes").PRIVACY_AND_SECURITY_PATH)};return h.jsx(c("IGCoreModal"),{children:h.jsxs(c("IGDSActionDialog.react"),{body:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_BODY,closeButtonPosition:"background",onModalClose:b,title:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_TITLE,children:[h.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:e,children:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_UPDATE_SETTINGS}),h.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:b,children:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_CALLING_NOT_ENABLED_MODAL_CANCEL})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectVerifiedUserCallingNotFollowingModal.react",["FBLogger","IGCoreModal","IGDSActionDialog.react","IGDSDialogItem.react","PolarisDirectActions","PolarisDirectStrings","PolarisLinkBuilder","PolarisdirectSelectors","browserHistory","react","react-redux-wwwig"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){var a=d("react-redux-wwwig").useDispatch(),b=d("react-redux-wwwig").useSelector(function(a){return a.direct.verifiedUserCalling.notFollowingUserId}),e=d("react-redux-wwwig").useSelector(function(a){return b!=null?d("PolarisdirectSelectors").getDirectUserById(a,b).username:null});if(e===null){c("FBLogger")("ig_web","add_new_highlight").mustfix("Unable to call - unknown userId");return h.jsx(h.Fragment,{children:" "})}var f=function(){a(d("PolarisDirectActions").closeVerifiedUserCallingNotFollowingModal())},g=function(){f(),d("browserHistory").browserHistory.push(d("PolarisLinkBuilder").buildUserLink(e))};return h.jsx(c("IGCoreModal"),{children:h.jsxs(c("IGDSActionDialog.react"),{body:d("PolarisDirectStrings").directVerifiedUserNotFollowingModalBody(e),closeButtonPosition:"background",onModalClose:f,title:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_NOT_FOLLOWING_MODAL_TITLE,children:[h.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{onClick:f,children:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_NOT_FOLLOWING_MODAL_OK}),h.jsx(d("IGDSDialogItem.react").IGDSDialogItem,{color:"primaryButton",onClick:g,children:d("PolarisDirectStrings").DIRECT_VERIFIED_USER_NOT_FOLLOWING_MODAL_VIEW_PROFILE})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDesktopDirectPage.react",["cx","PolarisDirectActions","PolarisDirectConstants","PolarisDirectInboxGeneralNullStateView.react","PolarisDirectInboxList.react","PolarisDirectInboxNullStateView.react","PolarisDirectPendingRequests.react","PolarisDirectStrings","PolarisDirectThreadView.react","PolarisDirectVerifiedUserCallingNotEnabledModal.react","PolarisDirectVerifiedUserCallingNotFollowingModal.react","PolarisErrorBoundary.react","PolarisGenericNullStateView.react","PolarisIGCoreBox","PolarisStyleConstants","PolarisdirectSelectors","PolarisuserSelectors","react","react-redux-wwwig","usePolarisMQTT"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect,k,l;function a(a){var b=a.activeFolder,e=a.threadId;a=a.view;var f=d("react-redux-wwwig").useDispatch(),g=c("usePolarisMQTT")(),h=d("react-redux-wwwig").useSelector(function(a){return a.displayProperties.viewportWidth}),m=d("react-redux-wwwig").useSelector(function(a){return d("PolarisuserSelectors").getViewer(a)}),n=(m=m==null?void 0:m.hasTabbedInbox)!=null?m:!1;m=d("react-redux-wwwig").useSelector(function(a){return a.direct.verifiedUserCalling});var o=m.notEnabledModalOpen;m=m.notFollowingModalOpen;var p=d("react-redux-wwwig").useSelector(function(a){return d("PolarisdirectSelectors").getPossibleDirectThreadById(a,{threadId:e})}),q=p==null?void 0:p.pending,r=p==null?void 0:p.folder,s;if(n){s=(r=r)!=null?r:b}j(function(){!k?(n&&s!=null?(f(d("PolarisDirectActions").initInbox({folder:d("PolarisDirectConstants").Folders.PRIMARY,forceSeqIdUpdate:!1})),f(d("PolarisDirectActions").initSecondaryInbox(d("PolarisDirectConstants").Folders.GENERAL))):f(d("PolarisDirectActions").initInbox({forceSeqIdUpdate:!1})),k=!0,l=s):s!=null&&l!==s?l=s:f(d("PolarisDirectActions").connectToMqtt("message"))},[f,s,n]);j(function(){f(d("PolarisDirectActions").getInteropStatus())},[f]);var t,u;switch(a){case"inbox":t=i.jsx(c("PolarisDirectInboxList.react"),{activeTab:s});u=b===d("PolarisDirectConstants").Folders.GENERAL?i.jsx(c("PolarisDirectInboxGeneralNullStateView.react"),{}):i.jsx(c("PolarisDirectInboxNullStateView.react"),{});break;case"requests":t=i.jsx(c("PolarisDirectPendingRequests.react"),{});u=i.jsx(c("PolarisGenericNullStateView.react"),{body:d("PolarisDirectStrings").PENDING_REQUESTS_BODY_RESTRICT_ENABLED,header:d("PolarisDirectStrings").PENDING_REQUESTS_TITLE});break;case"new":t=i.jsx(c("PolarisDirectInboxList.react"),{activeTab:s});u=i.jsx(c("PolarisDirectInboxNullStateView.react"),{});break;default:t=q===!0?i.jsx(c("PolarisDirectPendingRequests.react"),{activeThreadId:e}):i.jsx(c("PolarisDirectInboxList.react"),{activeTab:s,activeThreadId:e}),u=e!=null&&p!=null&&i.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:function(a){return null},children:i.jsx(c("PolarisDirectThreadView.react"),{mqtt:g,threadId:e},e)})}r=h<c("PolarisStyleConstants")["site-width-wide"].value;return i.jsxs("div",{className:"_aa5b",children:[o&&i.jsx(c("PolarisDirectVerifiedUserCallingNotEnabledModal.react"),{}),m&&i.jsx(c("PolarisDirectVerifiedUserCallingNotFollowingModal.react"),{}),i.jsxs(c("PolarisIGCoreBox"),{border:!r,direction:"row",flex:"grow",height:"100%",justifyContent:"center",maxWidth:c("PolarisStyleConstants")["site-width-wide"].value,overflow:"hidden",shape:r?"square":"rounded",width:"100%",children:[i.jsx("div",{className:"_aa5c",children:t}),i.jsx(c("PolarisIGCoreBox"),{color:"ig-primary-background",flex:"grow",height:"auto",children:u})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectShell",["PolarisUA","cr:2258","cr:2295"],(function(a,b,c,d,e,f,g){"use strict";a=d("PolarisUA").isDesktop()?b("cr:2258"):b("cr:2295");c=a;g["default"]=c}),98);
__d("PolarisMobileDirectPage.react",["PolarisDirectActions","PolarisDirectInboxList.react","PolarisDirectNewThread.react","PolarisDirectPendingRequests.react","PolarisDirectThreadView.react","nullthrows","react","react-redux-wwwig","usePolarisMQTT"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect,j;function a(a){var b=a.threadId;a=a.view;var e=d("react-redux-wwwig").useDispatch(),f=c("usePolarisMQTT")(),g=d("react-redux-wwwig").useSelector(function(a){return a.direct.inboxLoaded});i(function(){!j?(e(d("PolarisDirectActions").initInbox()),j=!0):e(d("PolarisDirectActions").connectToMqtt("message"))},[e]);i(function(){e(d("PolarisDirectActions").getInteropStatus())},[e]);switch(a){case"inbox":return h.jsx(c("PolarisDirectInboxList.react"),{activeTab:null});case"thread":return g?h.jsx(c("PolarisDirectThreadView.react"),{mqtt:f,threadId:c("nullthrows")(b)},b):h.jsx(h.Fragment,{});case"requests":return h.jsx(c("PolarisDirectPendingRequests.react"),{});case"new":return h.jsx(c("PolarisDirectNewThread.react"),{})}return null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisDirectInboxOldRoot.react",["PolarisDesktopDirectPage.react","PolarisDirectConstants","PolarisDirectShell","PolarisMobileDirectPage.react","PolarisPageIdentifierConstants","PolarisUA","XIGSharedDataHelper","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b;a=a.props;var e=a.routeParams,f=e.folder;e=e.thread_key;a=a.routeProps.subpage;b=c("XIGSharedDataHelper")==null?void 0:(b=c("XIGSharedDataHelper").config)==null?void 0:(b=b.viewer)==null?void 0:b.has_tabbed_inbox;var g=d("PolarisUA").isDesktop();b=b===!0&&g;var i;b&&(i=f==="general"?d("PolarisDirectConstants").Folders.GENERAL:d("PolarisDirectConstants").Folders.PRIMARY);f=e!=null?"thread":(b=a)!=null?b:"inbox";return h.jsx("div",{"data-testid":void 0,style:{height:"100%",width:"100%",position:"fixed"},children:h.jsx(c("PolarisDirectShell"),{pageIdentifier:c("PolarisPageIdentifierConstants").DirectInboxPage,children:g?h.jsx(c("PolarisDesktopDirectPage.react"),{activeFolder:i,threadId:(a=e)!=null?a:"",view:f}):h.jsx(c("PolarisMobileDirectPage.react"),{threadId:(b=e)!=null?b:"",view:f})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);