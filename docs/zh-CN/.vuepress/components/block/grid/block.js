export default {
    defaultGrid: {
        type: 'grid',
        style: {
            height: '200px',
            'grid-gap': '0'
        },
        blocks: {
            item1: { // 第一列
                type: 'component',
                style: {
                    background: '#f60'
                },
                options: {
                    'text': 'item1'
                }
            },
            item2: { // 第二列
                type: 'component',
                style: {
                    background: '#f50'
                },
                options: {
                    'text': 'item2'
                }
            }
        }
    },
    cardCloumnGrid: {
        type: 'grid',
        style: {
            height: '200px'
        },
        blocks: {
            grid2headerTitle1: { // 第一列
                type: 'card',
                options: {
                    headerTitle: '卡片类型自带的标题'
                },
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    }
                }
            },
            grid2headerTitle2: { // 第二列
                type: 'card',
                options: {
                    headerTitle: '卡片类型自带的标题'
                },
                blocks: ['emptyCardText']
            }
        }
    },
    unsupportGrid: {
        type: 'grid',
        style: {
            height: '200px'
        },
        blocks: {
            unsupportGridheaderTitle1: { // 第一列
                type: 'card',
                options: {
                    headerTitle: '卡片类型自带的标题'
                },
                style: {
                    width: 'calc(50% - 10px)',
                    height: '100%',
                    'margin-right': '10px'
                },
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    }
                }
            },
            unsupportGridheaderTitle2: { // 第二列
                type: 'card',
                options: {
                    headerTitle: '卡片类型自带的标题'
                },
                style: {
                    width: 'calc(50% - 10px)',
                    height: '100%',
                    'margin-left': '10px'
                },
                blocks: ['emptyCardText']
            }
        }
    },
    grid3: {
        type: 'grid',
        style: {
            height: '200px'
        },
        blocks: {
            grid3emptyCardBlock1: { // 第一列
                type: 'card',
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    },
                    emptyCardText2: {
                        type: 'title',
                        options: {
                            title: '标题类型的主标题',
                            subTitle: '标题类型的副标题'
                        },
                        slot: 'header'
                    }
                }
            },
            grid3emptyCardBlock2: { // 第二列
                type: 'card',
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    },
                    emptyCardText2: {
                        type: 'title',
                        options: {
                            title: '标题类型的主标题',
                            subTitle: '标题类型的副标题'
                        },
                        slot: 'header'
                    }
                }
            },
            grid3emptyCardBlock3: { // 第三列
                type: 'card',
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    },
                    emptyCardText2: {
                        type: 'title',
                        options: {
                            title: '标题类型的主标题',
                            subTitle: '标题类型的副标题'
                        },
                        slot: 'header'
                    }
                }
            }
        }
    },
    grid4: {
        type: 'grid',
        style: {
            height: '200px',
            'grid-template-columns': '1fr 2fr',
        },
        blocks: {
            grid3emptyCardBlock1: { // 第一列
                type: 'card',
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    },
                    emptyCardText2: {
                        type: 'title',
                        options: {
                            title: '标题类型的主标题',
                            subTitle: '标题类型的副标题'
                        },
                        slot: 'header'
                    }
                }
            },
            grid3emptyCardBlock2: { // 第二列
                type: 'card',
                blocks: {
                    emptyCardText: {
                        type: 'component',
                        options: {
                            is: 'div',
                            text: '自定义内容'
                        }
                    },
                    emptyCardText2: {
                        type: 'title',
                        options: {
                            title: '标题类型的主标题',
                            subTitle: '标题类型的副标题'
                        },
                        slot: 'header'
                    }
                }
            }
        }
    },
    grid5: {
        type: 'grid',
        style: {
            height: '700px',
            'grid-template-columns': '1fr 1fr',
            'grid-template-rows': '1fr 1fr'
        },
        blocks: {
            'grid4cardBlock5': {
                blocks: {
                    'titleBlock3': {
                        options: {
                            'title': '任务区'
                        },
                        type: 'title',
                        slot: 'header'
                    },
                    'componentBlock5': {
                        type: 'grid',
                        style: {
                            'grid-template-columns': '1fr 1fr 1fr 1fr',
                            'grid-template-rows': '1fr 1fr'
                        },
                        blocks: {
                            'icon1': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(238, 112, 109);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;\"><i class="el-icon-place"></i></div><p style="margin: 12px 0 0;font-size:12px;">终本案件 <span style="color: #ff3000;">0</span></p>'
                                },
                                type: 'component'
                            },
                            'icon2': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(94, 131, 251);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-edit-outline"></i></div><p style="margin: 12px 0 0;font-size:12px;">登记立案待立案 <span style="color: #ff3000;">1</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon3': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(247, 218, 71);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-refresh-left"></i></div><p style="margin: 12px 0 0;font-size:12px;">待恢复立案 <span style="color: #ff3000;">3</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon4': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(88, 202, 154);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-s-release"></i></div><p style="margin: 12px 0 0;font-size:12px;">本案立案庭拒签 <span style="color: #ff3000;">0</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon5': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(94, 131, 251);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-document"></i></div><p style="margin: 12px 0 0;font-size:12px;">已收案待立案 <span style="color: #ff3000;">1</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon6': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(247, 218, 71);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-s-promotion"></i></div><p style="margin: 12px 0 0;font-size:12px;">已收案待发送 <span style="color: #ff3000;">2</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon7': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(88, 202, 154);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-finished"></i></div><p style="margin: 12px 0 0;font-size:12px;">已申请保全待立案 <span style="color: #ff3000;">0</span></p>'
                                },
                                'type': 'component'
                            },
                            'icon8': {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="background: rgb(238, 112, 109);margin: 0 auto;width: 40px;height: 40px;padding: 8px 0;text-align: center;border-radius: 8px;color:#fff;font-size:24px;"><i class="el-icon-message"></i></div><p style="margin: 12px 0 0;font-size:12px;">执保已立案待发送 <span style="color: #ff3000;">1</span></p>'
                                },
                                'type': 'component'
                            }
                        }
                    }
                },
                'type': 'card'
            },
            'grid4cardBlock6': {
                blocks: {
                    'titleBlock4': {
                        options: {
                            'title': '功能区'
                        },
                        'type': 'title',
                        slot: 'header'
                    },
                    'componentBlock6': {
                        type: 'grid',
                        style: {
                            'grid-template-columns': '1fr 1fr 1fr 1fr',
                            'grid-template-rows': '1fr 1fr 1fr'
                        },
                        blocks: {
                            button1: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button2: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button3: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button4: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button5: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button6: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button7: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button8: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button9: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button10: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button11: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            },
                            button12: {
                                options: {
                                    'html': '<p style="border: 1px dashed #1861d5;cursor: pointer;overflow: hidden;font-size: 12px;text-align: center;white-space: nowrap;border-radius: 12px;text-overflow: ellipsis;background-color: #e2edff;line-height: 24px;">变更承办人</p>'
                                },
                                'type': 'component'
                            }
                        }
                    }
                },
                'type': 'card'
            },
            'grid4cardBlock7': {
                blocks: {
                    'titleBlock5': {
                        options: {
                            'title': '预警区'
                        },
                        type: 'title',
                        slot: 'header'
                    },
                    'componentBlock7': {
                        type: 'grid',
                        style: {
                            height: '180px',
                            'align-content': 'center',
                            'grid-template-columns': '1fr 1fr 1fr 1fr 1fr'
                        },
                        blocks: {
                            iconButton1: {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="margin:0 auto; width: 50px;height: 50px;padding: 10px 0;position: relative;border-radius: 8px;background: rgb(94, 131, 251); color:#fff;font-size: 28px;"><i class="el-icon-time"></i><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">已经到期未办理</p>'
                                },
                                type: 'component'
                            },
                            iconButton2: {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="margin:0 auto; width: 50px;height: 50px;padding: 10px 0;position: relative;border-radius: 8px;background: rgb(247, 218, 71); color:#fff;font-size: 28px;"><i class="el-icon-time" style="transform: rotate(72deg);"></i><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有1天</p>'
                                },
                                type: 'component'
                            },
                            iconButton3: {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="margin:0 auto; width: 50px;height: 50px;padding: 10px 0;position: relative;border-radius: 8px;background: rgb(88, 202, 154); color:#fff;font-size: 28px;"><i class="el-icon-time" style="transform: rotate(144deg)"></i><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有5天</p>'
                                },
                                type: 'component'
                            },
                            iconButton4: {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="margin:0 auto; width: 50px;height: 50px;padding: 10px 0;position: relative;border-radius: 8px;background: rgb(238, 112, 109); color:#fff;font-size: 28px;"><i class="el-icon-time" style="transform: rotate(200deg)"></i><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有15天</p>'
                                },
                                type: 'component'
                            },
                            iconButton5: {
                                style: {
                                    'text-align': 'center'
                                },
                                options: {
                                    'html': '<div style="margin:0 auto; width: 50px;height: 50px;padding: 10px 0;position: relative;border-radius: 8px;background: rgb(144, 68, 255); color:#fff;font-size: 28px;"><i class="el-icon-time" style="transform: rotate(288deg);"></i><div style="top: -6px;color: #fff;width: 18px;right: -6px;height: 18px;position: absolute;font-size: 12px;line-height: 18px;border-radius: 50%;background-color: #ff3000;">1</div></div><p style="margin-top: 12px;font-size:12px;">距离到期还有30天</p>'
                                },
                                type: 'component'
                            }
                        }
                    }
                },
                type: 'card'
            }
        }
    }
}